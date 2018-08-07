<template>

    <div id="quiz-body">
        <h1>QUESTION {{ current_index }} OF {{ quiz_length }}</h1>
        <h2 class="question" v-if="question && type != 'take'">{{ question.question }}</h2>
        <h2 class="question" v-if="question && type == 'take'">
            {{ question.formatted_question.replace("\{\{first_name\}\}", first_name) }}
        </h2>
        
        <div class="choices-container">
            <div v-for="(choice) in question.choices">
                <button v-if="choice.length > 0 && type === 'create'" @click="sendAnswer(choice, question)" class="choices normal">
                    {{choice}}
                </button>
                <button v-if="choice.length > 0 && type === 'take'" @click="checkAnswer(choice, question)" class="choices"
                    v-bind:class="{ 
                        'wrong': has_answered && (choice != question.answer), 
                        'correct': has_answered && (choice === question.answer),
                        'normal': !has_answered,
                        'no-hover': has_answered
                    }">
                    {{choice}}
                </button>

                <button v-if="choice.length > 0 && type === 'replay'" class="choices no-hover"
                    v-bind:class="{ 
                        'normal': (choice != question.answer) && (choice != guess), 
                        'correct': (choice === question.answer),
                        'selected': (choice === guess),
                    }">
                    {{choice}}
                </button>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            has_answered: false
        }
    },

    props: [
        'current_index',
        'quiz_length',
        'question',
        'type',
        'first_name',
        'guess_index'
    ],
    
    methods: {
        sendAnswer: function(choice_text, question) {
            this.$emit('sendAnswer', [choice_text, question]);
        },
        /*checkAnswer: function(question, choice_index) {
            this.has_answered = true;
            setTimeout(()=>{ 
                this.$emit('sendAnswer',  [question, choice_index]);
            }, 100);
        }*/
        checkAnswer: function(choice_text, question) {
            this.has_answered = true;
            setTimeout(()=>{ 
                this.$emit('sendAnswer', [choice_text, question]);
            }, 100);
        },
    }
}
</script>

<style>

#quiz-body {
    font-family: 'Poiret One', sans-serif;
    margin-top: 15%;
    text-align: center;
}

.correct {
    background: rgb(84, 126, 84);
}

.wrong {
    background: rgb(230, 143, 143);
}

.selected {
    background: rgb(160, 125, 218);
}

.normal {
    background: #d6d8db;
}

.question {
    font-family: 'Raleway';
    margin-top: 10%;
    font-weight: 700;
    margin-left: 50px;
    margin-right: 50px;
}

.choices-container {
    margin-top: 10%;
}

.choices {
    color: white;
    padding: 10px 20px;
    position: relative;
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 150%;
    width: 55%;
}

.choices:not(.no-hover):hover {
    background:  #55c4ac;
}

.no-hover {
    cursor: default;
}



</style>
