<template>
<div id = "quiz-replay" :key="display_index">
    <QuizBody 
        v-if="player_session"
        :type="'replay'"
        :current_index="display_index" 
        :quiz_length="quiz.questions.length" 
        :question="quiz.questions[question_index]"
        :guess_index="player_session.answers[question_index]">
    </QuizBody>
    <button id="next_button"
    @click="next" v-if="player_session && (display_index != quiz.questions.length)">
        NEXT
    </button>
    <button id="next_button"
    @click="close" v-if="player_session && (display_index == quiz.questions.length)">
        END
    </button>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuizBody from '../components/QuizBody.vue';

export default {
    components: {
        QuizBody
  	},
    data() {
        return {
            question_index: 0,
            display_index: 1,
            quiz: null,
            player_session: null
        }
    },
    mounted () {
        let quiz_session_string= this.$route.params.quiz_session;
        let quiz_session = quiz_session_string.split('.');
        let quiz_id = parseInt(quiz_session[0]);
        let player_session_id = parseInt(quiz_session[1]);
        this.quiz = this.$store.getters['quiz'](quiz_id);
        this.player_session = this.quiz.player_sessions.find(session => session.id == player_session_id);
    },
    methods: {
        next() {
            this.question_index++;
            this.display_index++;
        },
        close() {
            this.$router.push('/home');
        }
    }
}
</script>

<style>
#quiz-replay {
    text-align: center;
}

#next_button {
    background: #0084ff;
    /*border: none;*/
    color: white;
    padding: 10px;
    position: relative;
    margin-top: 150px;
    font-size: 130%;
    width: 30%;
    /*border-radius: 30px;*/
}
</style>