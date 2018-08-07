import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

// the root, initial state object

const state = {
	user: null,
	new_category_index: null,
	filtered_questions: null,
	new_quiz_token: null,
	backup_quiz: null,
	my_quizzes: null,
	friend_quizzes: null,
	quiz_to_answer: null,
	categories: [
		'Would You Rather',
		'Love Life',
		'General',
		'Scenario',
		'Yes or No',
		'Food & Drinks',
		'Fill in the Blanks'
	],
	leaderboard: [
	],
}
// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

