import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import jwt from 'jsonwebtoken';

Vue.use(VueAxios, axios)
Vue.use(jwt)

/*const Axios = axios.create({
  baseURL: './static/data/',
});

const setResult = (store, result) => {
  Axios.get('en/' + result + '.json').then((response) => {
    store.store.commit('SET_RESULT', response.data);
  });
};*/

export default {
    setUser (store) {
		let temp_user = {
			id: FBInstant.player.getID(),
			name: FBInstant.player.getName(),
			photo: FBInstant.player.getPhoto(),
		}
		store.commit('SET_USER', temp_user);
	},

	loadQuiz (store) {

		let signed_player_info = null;
		FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg: "wooooof"}))
			.then((result) => {
				signed_player_info = result;
			})
			.then(() => {
				return axios.post("https://gameoffriends.herokuapp.com/random", {
					"player_id": signed_player_info.getPlayerID(),
                    "signed_request": signed_player_info.getSignature(),
				});
			})
			.then(response => {		
				let payload = jwt.decode(response.data.token, {complete: true}).payload;
				let category_string = payload.question_type;
				let category_index = store.state.categories.indexOf(category_string);
				let questions = payload.questions;
				let quiz = {
					category_index: category_index,
					questions: questions,
					token: response.data.token
				}
				console.log("new quiz category: " + category_string);
				console.log("new quiz index: " + category_index);
				store.commit('SET_NEW_QUIZ', quiz);
			})
			.catch(error => {
				console.log("error: " + error);
			});
	},

	loadBackupQuiz (store) {
		let signed_player_info = null;
		FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg: "wooooof"}))
			.then((result) => {
				signed_player_info = result;
			})
			.then(() => {
				return axios.post("https://gameoffriends.herokuapp.com/random", {
					"player_id": signed_player_info.getPlayerID(),
                    "signed_request": signed_player_info.getSignature(),
				});
			})
			.then(response => {
				let payload = jwt.decode(response.data.token, {complete: true}).payload;
				let category_string = payload.question_type;
				let category_index = store.state.categories.indexOf(category_string);
				let questions = payload.questions;
				let backup = {
					category_index: category_index,
					questions: questions,
					token: response.data.token
				}
				console.log("backup quiz category: " + category_string);
				console.log("backup quiz index: " + category_index);
            	store.commit('SET_BACKUP_QUIZ', backup);
			})
			.catch(error => {
				console.log("error: " + error);
			});
	},

	loadSingleQuestion (store, replace_index) {
		let signed_player_info = null;
		FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg: "wooooof"}))
			.then((result) => {
				signed_player_info = result;
			})
			.then(() => {
				return axios.post("https://gameoffriends.herokuapp.com/swap", {
                    "player_id": signed_player_info.getPlayerID(),
                    "signed_request": signed_player_info.getSignature(),
                    "token": store.state.new_quiz_token,
                    "index": replace_index,
                });
			})
			.then(response => {
				let payload = jwt.decode(response.data.token, {complete: true}).payload;
				let question = payload.questions[replace_index];
            	store.commit('APPEND_NEW_QUESTION', question);
			})
			.catch(error => {
				console.log("error: " + error);
			});
	},

	saveQuiz (store, quiz_answers) {
		let player_id = null;
        let signature = null;
		let post_body = null;
		FBInstant.player.getSignedPlayerInfoAsync()
		.then((result) => {
			player_id = result.getPlayerID();
            signature = result.getSignature();
		})
		.then(() => {
			post_body = {
				"player_id": player_id,
                "signed_request": signature,
				"token": store.state.new_quiz_token,
				"quiz_answers": quiz_answers,
			};
			//return axios.post("https://gameoffriends.herokuapp.com/quiz", post_body);
		})
		.then(response => {
			store.state.new_category_index = store.state.backup_quiz.category_index;
			store.state.filtered_questions = store.state.backup_quiz.questions;
			store.state.new_quiz_token = store.state.backup_quiz.token;
			console.log("new category index: " + store.state.new_category_index);
		})
		.catch(error => {
			console.log("error: " + error);
		});
	},

	getUserQuizzes: (store) => {
		let player_id = null;
		let signature = null;
		let user_quizzes = [];
		//store.commit('GET_USER_QUIZZES', user_quizzes);
		FBInstant.player.getSignedPlayerInfoAsync()
          .then(result => {
              player_id = result.getPlayerID();
              signature = result.getSignature();
          })
		  .then(() => {
			return axios.get("https://gameoffriends.herokuapp.com/quiz", {
				headers: {
					"player_id": player_id,
					"signed_request": signature,
				},
			});
		}).then(response => {
			let quizzes = response.data.player.quizzes;
			for (let i = 0; i < quizzes.length; i++) {
				quizzes[i]["owner"] = store.state.user;
			}
			user_quizzes = quizzes;
			store.commit('GET_USER_QUIZZES', user_quizzes);
		})

	},

	getFriendQuizzes: (store) => {	
		let player_id = null;
		let signature = null;
		let friends = null;
		let friends_quizzes = [];
		let friend = null;
		//store.commit('GET_FRIEND_QUIZZES', friends_quizzes);
		FBInstant.player.getSignedPlayerInfoAsync()
		.then(result => {
			player_id = result.getPlayerID();
			signature = result.getSignature();
		})
		.then(() => {
			FBInstant.player.getConnectedPlayersAsync()
			.then(players => {
				console.log('loadFriends: ');
				friends = players;
			})
			.then(() => {
				for (let i = 0; i < friends.length; i++) {
					friend = friends[i].$1;
					axios.get("https://gameoffriends.herokuapp.com/quiz", {
						headers: {
							"player_id": player_id,
							"signed_request": signature,
							"friend_id": friend.id
						}
					})
					.then(response => {
						let quizzes = response.data.player.quizzes;
						for (let j = 0; j < quizzes.length; j++) {
							let first_name = friend.name.split(' ')[0];
							friend.name = first_name;
							quizzes[j]["owner"] = friend;
							friends_quizzes.push(quizzes[j]);
							if (j + 1 == quizzes.length) {
								store.commit('GET_FRIEND_QUIZZES', friends_quizzes);
							}
						}
					})
				}
			})
		})	
	},

	takeQuiz: (store, quiz) => {
		store.commit('TAKE_QUIZ', quiz);
	},

	savePlayerSession: (store, player_session) => {
		store.commit('UPDATE_LEADERBOARD', player_session);
		store.commit('SAVE_PLAYER_SESSION', player_session);
	},

};