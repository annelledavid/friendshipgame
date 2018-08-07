<template>
    <div id="intro">
        <h1>How well do you friends<br>know you?</h1>
        <button id="start_button" @click="start">START</button>
    </div>
</template>

<script>
//import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
        }
    },

    mounted () {
        //this.$store.dispatch('setNewCategoryIndex');
        //this.$store.dispatch('setUser');
        //this.$store.dispatch('loadQuiz');
        //console.log('start page');
    },
    
    methods: {
        start() {
            //console.log('start page');
            //this.$store.dispatch('setNewCategoryIndex');
            this.$store.dispatch('setUser');
            this.$store.dispatch('loadQuiz');
            //this.$store.dispatch('setNewCategoryIndex');
            //this.$store.dispatch('loadQuiz');
            this.$router.push('/category');
        }
    }
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Poiret+One:400,300);

#intro {
   /* text-align: center;*/
    font-family: 'Poiret One', sans-serif;
    margin-top: 25%;
    text-align: center;
}

#start_button {
    background: #0084ff;
    /*border: none;*/
    color: white;
    padding: 10px;
    position: relative;
    margin-top: 5%;
    font-size: 130%;
    width: 55%;
    /*border-radius: 30px;*/
}

</style>