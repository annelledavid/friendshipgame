<template>
    <div id="leaderboard" class="body_margin">
        <h3 class="bold" v-bind:class="{ 'leaderboard_header' : type == 'quiz_leaderboard'}">Leaderboard</h3>

        <div v-if="leaderboard.length == 0" class="no_content">
             NO LEADERBOARD ENTRIES
        </div>

        <div v-for="(player_session, index) in leaderboard" class="leaderboard_item bold" @click="viewReplay(player_session.id)" 
            v-bind:class="{ 'leaderboard_item_link' : type == 'quiz_leaderboard', 
            'leaderboard_item_list' : type == 'home_leaderboard' }">
            <div class="leaderboard_rank">{{index + 1}}</div>
            <div><img width="40" height="40" :src="player_session.player.photo"></div>
            <div class="leaderboard_name">{{player_session.player.name}}</div>
            <div class="leaderboard_score">{{player_session.score}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'leaderboard',
        'type',
        'quiz_id'
    ],
    methods: {
        viewReplay(id) {
            if(this.type == 'quiz_leaderboard') {
                let quiz_session = this.quiz_id + '.' + id;
                this.$router.push('/quiz-replay/' + quiz_session);
            }
        }
    }
}
</script>

<style>
.leaderboard_header {
    margin-bottom: 30px;
}

.leaderboard_item {
    font-size: 19px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 40px 45px 100px auto;
    text-align: right;
}

.leaderboard_item img {
    margin-top: -3px;
    border-radius: 50%;
}

.leaderboard_rank {
    text-align: left;
}

.leaderboard_name {
    text-align: left;
    padding-left: 30px;
}

.leaderboard_score {
    color: #0084ff;
    margin-right: 4%;
}

.leaderboard_item_list {
    margin-top: 20px;
}

.leaderboard_item_link {
    padding: 20px;
    border-radius: 30px;
    background: rgb(157, 226, 243);
}

.leaderboard_item_link:hover {
    background: rgb(194, 172, 245);
}
</style>