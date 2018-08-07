<template>
    <div id="quiz-list">
		<h3 class="bold">{{ list_title }}</h3>

            <div v-if="quiz_set.length == 0" class="no_content">
                <span v-if="button_type == 'play'"> NO QUIZZES FROM FRIENDS </span>
                 <span v-if="button_type == 'leaderboard'"> NO QUIZZES FROM YOU </span>
            </div>

            <swiper :options="swiperOption" class="quiz_container" v-if="quiz_set.length > 0">
                <swiper-slide v-for="quiz in quiz_set" class="quiz_panel">  
                    <div class="prof_pic"><img width="80" height="80" :src="quiz.owner.photo"></div>
                    <div class="quiz_panel_label"><label>{{ quiz.question_type }}<br/>by {{ quiz.owner.name }}</label></div>
                    <div>
                        <button v-if="button_type == 'play'" @click="takeQuiz(quiz)" class="quiz_panel_button"> Play </button>
                        <button v-if="button_type == 'leaderboard'" @click="viewLeaderboard(quiz)" class="quiz_panel_button"> Leaderboard </button>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
    },
    props: [
        'list_title',
		'quiz_set',
        'button_type',
    ],
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
	methods: {
        takeQuiz(quiz) {
            this.$store.dispatch('takeQuiz', quiz);
            this.$router.push('/quiz-take');
        },
        viewLeaderboard(quiz) {
            //this.$router.push('/quiz-leaderboard/' + id);
        }
    }
}
</script>

<style>
.quiz_container {
    margin-top: 2%;
}

.quiz_panel {
    background: rgb(192, 220, 243);
    /*background-image: url('../assets/images/pattern.jpg');*/
    padding: 20px 20px 25px 20px;
    /*margin-right: 2%;*/
    border-radius:10px;
    text-align: center;
    /*display: inline-block;*/
}

.prof_pic {
    margin-bottom: 12px;
}

.prof_pic img {
    border: 5px solid #32ce6d;
    border-radius: 50px;
}

.quiz_panel_label {
    margin-bottom: 12px;
    color: #ffffff;
}

.quiz_panel_button {
    background: #0084ff;
    /*border: none;*/
    color: white;
    padding: 10px;
    position: relative;
    margin-top: 5%;
    margin-bottom: 0px;
    font-size: 15px;
    width: 120px;
    /*border-radius: 30px;*/
}

</style>