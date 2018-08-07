<template>
<div id = "quiz-leaderboard">
    <div class="home_link">
        <h3>
            <router-link to="/home" class="home_link_text">HOME</router-link>
        </h3>
    </div>
    <div id="leaderboard_title" v-if="quiz">
        <h1>{{quiz.category}}</h1>
        <h1>by {{quiz.owner.name}}</h1>
    </div>
    <div id="leaderboard_container" v-if="quiz">
        <Leaderboard :leaderboard="quiz.player_sessions" :type="'quiz_leaderboard'" :quiz_id="quiz.id"></Leaderboard>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Leaderboard from '../components/Leaderboard.vue';

export default {
    components: {
        Leaderboard
  	},
    data() {
        return {
            quiz: null
        }
    },
    mounted () {
        this.quiz = this.$store.getters['quiz'](this.$route.params.id);
    },
}
</script>

<style>
#leaderboard_title {
    text-align: center;
}

#leaderboard_container {
    width: 90%;
    margin: 50px auto;
}
</style>