<template>
<transition>
    <div id="quiz-take" :key="display_index">
       <QuizBody 
            v-if="quiz_to_take"
            :type="'take'"
            :current_index="display_index" 
            :quiz_length="quiz_to_take.questions.length" 
            :question="quiz_to_take.questions[question_index]"
            :first_name="quiz_to_take.owner.name"
            @sendAnswer="checkAnswer">
        </QuizBody>

        score: {{score}}
    </div>
</transition>
</template>

<script>
import { mapState } from 'vuex';
import QuizBody from '../components/QuizBody.vue';

export default {
    components: {
        QuizBody
  	},
    data() {
        return {
            question_index: 0,
            display_index: 1,
            score: 0,
            player_answers: [],
            player_session: {
                quiz_id: null,
                answers: [],
                score: 0
            }
        }
    },
    computed: mapState([
        'quiz_to_take'
    ]),
    methods: {
        checkAnswer(question_answer) {
            let choice_text = question_answer[0];
            let question = question_answer[1];
            let temp_answer = {
                question: question.question,
                answer: choice_text
            }
            this.player_answers.push(temp_answer);

            if(choice_text === question.answer) {
                this.score++;
            }

            if(this.display_index < this.quiz_to_take.questions.length) {
                this.question_index++;
                this.display_index++;
            }
            else {
                //this.player_session.quiz_id = this.quiz_to_take.id;
                this.player_session.quiz = this.quiz_to_take;
                this.player_session.answers = this.player_answers;
                this.player_session.score = this.score;
                this.$store.dispatch('savePlayerSession', this.player_session);
                this.$router.push('/home');
            }
        }
    }
}
</script>
