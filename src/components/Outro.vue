<template>
    <div id="outro">
        <div class="home_link">
            <h3>
                <router-link to="/home" class="home_link_text">HOME</router-link>
            </h3>
        </div>
        <div id="end_body">
            <h1 id="end_header">Your quiz is ready!</h1>
            <img width="130" height="130" :src="user.photo" id="prof_pic">
            <h2 id="end_question">How well do you<br>know {{user.name}}?</h2>
            <h2 id="end_message">Send your quiz to your<br>friends and find out<br>who knows you best!</h2>
            <button id="end_button" @click="share">
                SHARE
            </button>
            <div id="create_link">
                <router-link to="/category" id="create_link_text" @click="newGame">Create new quiz</router-link>
            </div>
        </div>


    </div>
</template>

<script>
//import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
    data() {
        return {
        }
    },

    mounted () {
        //this.$store.dispatch('setNewCategoryIndex');
        //this.$store.dispatch('loadQuiz');
    },

    computed: mapState([
        'user', 
    ]),
    
    methods: {
        share() {
            this.$store.dispatch('share');
            //this.$router.push('/home');
        },
        newGame() {
            //this.$store.dispatch('loadQuiz');
            this.$router.push('/category');
        }
    }
}
</script>

<style>
#outro {
    font-family: 'Raleway', sans-serif;
}

.home_link, .home_link_text {
    margin-top: 40px;
}

#end_header {
    margin-top: 8%;
    font-weight: 700;
}

#end_body {
    text-align: center;
}

#prof_pic {
    margin-top: 5%;
    border-radius: 50%;
}

#end_question {
    font-weight: 700;
    margin-top: 5%;
}

#end_message {
    font-size: 150%;
    font-family: 'Poiret One';
}

#end_button {
    background:  #55c4ac;
    width: 40%;
    font-size: 150%;
    font-weight: 700;
    margin-top: 4%;
}

#create_link, #create_link_text {
    color: #0084ff;
    text-decoration: underline;
    font-size: 125%;
    margin-top: 5%;
    font-family: 'Poiret One';
    
}

</style>