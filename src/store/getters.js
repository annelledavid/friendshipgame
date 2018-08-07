export default {
    leaderboard: state => state.leaderboard.sort(function(a, b){ return b.score-a.score }),
}