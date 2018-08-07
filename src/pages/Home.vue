<template>
    <div id="home">

        <div class="overlay" v-if="!my_quizzes && !friend_quizzes"><Spinner name="ball-beat" color="#4ba1c6" noFadeIn class="spinner"/></div> 

        <div id="banner">
            <h1 class="bold">THE FRIENDSHIP GAME</h1>
            <router-link to="/category" tag="button" id="play_button">Play</router-link>
        </div>

        <div id="quizzes_friends" class="body_margin" v-if="friend_quizzes">
            <QuizList 
                :list_title="'Quizzes by Friends'" 
                :quiz_set="friend_quizzes" 
                :button_type="'play'">
            </QuizList>
        </div>

        <div id="quizzes_me" class="body_margin" v-if="my_quizzes">
            <QuizList 
                :list_title="'My Quizzes'" 
                :quiz_set="my_quizzes" 
                :button_type="'leaderboard'">
            </QuizList>
        </div>

        <Leaderboard :leaderboard="leaderboard" :type="'home_leaderboard'"></Leaderboard>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import QuizList from '../components/QuizList.vue';
import Leaderboard from '../components/Leaderboard.vue';
import Spinner from 'vue-spinkit';

export default {
    components: {
        QuizList,
        Leaderboard,
        Spinner
  	},
    data() {
        return {
        }
    },
    mounted() {
        this.$store.dispatch('getFriendQuizzes');
        this.$store.dispatch('getUserQuizzes');
    },
    computed: mapState([
        'my_quizzes', 'friend_quizzes', 'leaderboard'
    ]),
}
</script>

<style>
#home {
    font-family: 'Raleway', sans-serif;
}

#banner {
    text-align: center;
    background-color: #0084ff;
    padding-top: 30px;
    padding-bottom: 50px;
    margin-bottom: 30px;
}

#banner h1 {
    color: #ffffff;
}

#play_button {
    background: #ffffff;
    /*border: none;*/
    color: #0084ff;
    padding: 10px;
    position: relative;
    font-size: 150%;
    width: 20%;
    margin-top: 3%;
    /*border-radius: 30px;*/
}

.bold {
    font-weight: 700;
}

.body_margin {
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 3%;
}


.no_content {
    background: rgb(192, 220, 243);
    text-align: center;
    padding: 50px;
    border-radius: 10px;
    margin-top: 15px;
    color: #ffffff;
}

</style>