<template>
<transition>
    <div id="quiz-create" :key="question_index">
        <div class="overlay" 
        v-if="!filtered_questions[question_index]">
            <Spinner name="ball-grid-pulse" color="#f4b5bc" noFadeIn class="spinner"/>
        </div> 
        <QuizBody 
            v-if="filtered_questions[question_index]"
            :type="'create'"
            :current_index="display_index" 
            :quiz_length="required_length" 
            :question="filtered_questions[question_index]"
            @sendAnswer="storeAnswer">
        </QuizBody>
        <!--<button id="skip_button" @click="skip" v-if="no_skip && filtered_questions[question_index]">SKIP QUESTION</button>-->
        <button id="skip_button" @click="skip" v-if="filtered_questions[question_index]">CHANGE QUESTION</button>
    </div>
</transition>
</template>

<script>
import { mapState} from 'vuex';
import Spinner from 'vue-spinkit';

import QuizBody from '../components/QuizBody.vue';

export default {
    components: {
        QuizBody,
        Spinner
  	},
    data() {
        return {
            question_index: 0,
            display_index: 1,
            required_length: 5,
            new_quiz_questions: [],
            //no_skip: true,
            //skip_times: 0
        }
    },
    computed: mapState([
        'filtered_questions',
    ]),
    methods: {
        storeAnswer(question_answer) {
            let choice_text = question_answer[0];
            let question = question_answer[1];
            let temp_question = {
                question: question.question,
                answer: choice_text
            }
            //console.log(temp_question);
            this.new_quiz_questions.push(temp_question);

            if(this.display_index < this.required_length) {
                this.question_index++;
                this.display_index++;
            }
            else {
                this.$store.dispatch('saveQuiz', this.new_quiz_questions);
                this.$router.push('/end');
            }
        },
        skip() {
            //get a new question
            this.$store.dispatch('loadSingleQuestion', this.question_index);
            this.question_index++;
            //this.no_skip = false;
            //this.skip_times++;
        }
    }
}
</script>

<style>
#quiz-create {
    text-align: center;
}

#skip_button {
    background: #0084ff;
    /*border: none;*/
    color: white;
    padding: 10px;
    position: relative;
    margin-top: 150px;
    font-size: 130%;
    width: 45%;
    /*border-radius: 30px;*/
}

</style>
