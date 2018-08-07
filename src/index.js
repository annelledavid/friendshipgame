import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './router/router'
import '../assets/css/app.css'
import '../assets/css/Animate.css'

new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    FBInstant.initializeAsync()
    .then(function() { 
      FBInstant.setLoadingProgress(50);
      FBInstant.setLoadingProgress(100);       
      
      
      FBInstant.startGameAsync().then(function() {
        // Retrieving context and player information can only be done
        // once startGameAsync() resolves
        //var contextId = FBInstant.context.getID();
        //var contextType = FBInstant.context.getType();

        //var playerName = FBInstant.player.getName();
        //var playerPic = FBInstant.player.getPhoto();
        //var playerId = FBInstant.player.getID();

        // Once startGameAsync() resolves it also means the loading view has 
        // been removed and the user can see the game viewport
        this.startGame();          
      });

    });
  },
  methods: {
    startGame() {
      // Once all assets are loaded, tells the SDK 
      // to end loading view and start the game
      /*FBInstant.startGameAsync()
      .then(function() {
        // Retrieving context and player information can only be done
        // once startGameAsync() resolves
        var contextId = FBInstant.context.getID();
        var contextType = FBInstant.context.getType();

        var playerName = FBInstant.player.getName();
        var playerPic = FBInstant.player.getPhoto();
        var playerId = FBInstant.player.getID();

        // Once startGameAsync() resolves it also means the loading view has 
        // been removed and the user can see the game viewport
      });*/
    }
  }
})

