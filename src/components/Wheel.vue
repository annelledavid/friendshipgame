<template>
    <div id="wheel">

        <div class="overlay" v-if="!filtered_questions"><Spinner name="ball-beat" color="#4ba1c6" noFadeIn class="spinner"/></div> 

        <h1>CHOOSE A CATEGORY</h1>

        <div id="wheel-container">
            <img width="400" height="400" src="/static/img/chart1.png" v-bind:style="wheelRotateTransform" id="wheel_img">
            <img width="100" height="100" src="/static/img/pin.png" id="pin">
        </div>

        <button @click="spin" class="category_button" v-if="!isSpinning && filtered_questions" >SPIN</button>
        <router-link to="/quiz-create" tag="button" class="category_button" v-if="testResult">NEXT</router-link>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import Spinner from 'vue-spinkit';

export default {
    components: {
        Spinner
    },

    data() {
        return {
            //set default degree (360*11) before 1800 = 360*5
            degree: 3960,
            //number of clicks = 0
            clicks: 0,
            activateSpinClass: false,
            wheelRotateTransform: {},
            wheelResult: null,
            testResult: null,
            testHolder: null,
            isSpinning: false
        }
    },
    mounted () {
        //this.$store.dispatch('loadQuestions')
        //this.$store.dispatch('loadFilteredQuestions')
    },
    computed: mapState([
        'new_category_index',
        'filtered_questions',
        'categories'
    ]),
    methods: {
        spin() {
            //disable button
            this.isSpinning = true;

            //add 1 every click
            this.clicks = this.clicks + 1;

            /*multiply the degree by number of clicks
            generate random number between 1 - 360, 
            then add to the new degree*/
            let newDegree = this.degree * this.clicks;

            /*set the index of the slice the wheel should land on (ex. blue green)
            and compute for the extra degree needed for the wheel to rotate*/
            let index = this.new_category_index;
            let slices = this.categories.length;
            let divisor = Math.round(360/slices);
            let extraDegree = (index - slices + 1) * divisor * -1;
            let totalDegree = newDegree + extraDegree;
            this.wheelRotateTransform = {
                'transform' : 'rotate(' + totalDegree + 'deg)'
            }
            this.wheelResult = this.categories[index];
            //console.log(this.wheelResult);

            this.testHolder = this.categories[index];
            setTimeout(()=>{ this.testResult = this.testHolder }, 6000);

            this.loadBackup();
        },
        loadBackup() {
            this.$store.dispatch('loadBackupQuiz');
        }
    }
}
</script>

<style>

#wheel {
    /*text-align: center;*/
    font-family: 'Poiret One', sans-serif;
    margin-top: 15%;
    text-align: center;
}

.category_button {
    background: #0084ff;
    color: white;
    padding: 10px;
    position: relative;
    margin-top: 10%;
    font-size: 150%;
    width: 30%;
}

#wheel-container {
    position: relative;
    margin-top: 8%;
}

#wheel_img {
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    -webkit-transition: all 6s cubic-bezier(0,.99,.44,.99);
	-moz-transition:    all 6s cubic-bezier(0,.99,.44,.99);
	-o-transition:      all 6s cubic-bezier(0,.99,.44,.99);
	-ms-transition:     all 6s cubic-bezier(0,.99,.44,.99);
	transition:         all 6s cubic-bezier(0,.99,.44,.99);	
}

#pin {
    position: absolute; 
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; 
    margin-top: 150px;
    z-index: 1
}

.category_button .disabled {
    background: black;
}

</style>