export default {
    SET_USER: (state, temp_user) => {
		state.user = temp_user;
	},

	SET_NEW_QUIZ: (state, quiz) => {
		state.new_category_index = quiz.category_index;
		state.filtered_questions = quiz.questions;
		state.new_quiz_token = quiz.token;
	},

	SET_BACKUP_QUIZ: (state, backup) => {
		state.backup_quiz = backup;
	},

	APPEND_NEW_QUESTION: (state, new_question) => {
		state.filtered_questions.push(new_question);
	},

	GET_USER_QUIZZES: (state, quizzes) => {
		state.my_quizzes = quizzes;
	},

	GET_FRIEND_QUIZZES: (state, quizzes) => {
		state.friend_quizzes = [];
		for (let i = 0; i < quizzes.length; i++){
			state.friend_quizzes.push(quizzes[i]);
		}
	},

	TAKE_QUIZ: (state, quiz) => {
		state.quiz_to_take = quiz;
	},

	SAVE_PLAYER_SESSION: (state, player_session) => {
		/*let current_quiz = player_session.quiz;
		if(current_quiz.player_answers == null) {
			current_quiz.player_answers
		}
		if (state.leaderboard.length == 0) {
            state.leaderboard.push({
           		player: state.user,
            	score: player_session.score
            })
        }
        else {
            //search for existing record in leaderbord and add score, if none, create new instance
            for (let i = 0; i < state.leaderboard.length; i++) {
                if ( state.leaderboard[i].player.id == state.user.id ) {
                    state.leaderboard[i].score += player_session.score;
                    break;
                }
                if ( i + 1 == state.leaderboard.length) {
                    state.leaderboard.push({
                        player: state.user,
                        score: player_session.score
                    })
                    break;
                }
            }
        }   */
	},

	UPDATE_LEADERBOARD: (state, player_session) => {
		if (state.leaderboard.length == 0) {
            state.leaderboard.push({
           		player: state.user,
            	score: player_session.score
            })
        }
        else {
            //search for existing record in leaderbord and add score, if none, create new instance
            for (let i = 0; i < state.leaderboard.length; i++) {
                if ( state.leaderboard[i].player.id == state.user.id ) {
                    state.leaderboard[i].score += player_session.score;
                    break;
                }
                if ( i + 1 == state.leaderboard.length) {
                    state.leaderboard.push({
                        player: state.user,
                        score: player_session.score
                    })
                    break;
                }
            }
        }   
    }
    
}