!function(e){function t(t){for(var i,o,a=t[0],u=t[1],l=t[2],d=0,_=[];d<a.length;d++)o=a[d],s[o]&&_.push(s[o][0]),s[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);for(c&&c(t);_.length;)_.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={0:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;r.push([262,1]),n()}({112:function(e,t,n){"use strict";var i=n(33);n.n(i).a},135:function(e,t){},137:function(e,t){},172:function(e,t){},173:function(e,t){},232:function(e,t,n){"use strict";var i=n(34);n.n(i).a},235:function(e,t,n){"use strict";var i=n(35);n.n(i).a},237:function(e,t,n){"use strict";var i=n(36);n.n(i).a},239:function(e,t,n){"use strict";var i=n(37);n.n(i).a},241:function(e,t,n){"use strict";var i=n(38);n.n(i).a},243:function(e,t,n){"use strict";var i=n(39);n.n(i).a},248:function(e,t,n){"use strict";var i=n(40);n.n(i).a},250:function(e,t,n){"use strict";var i=n(41);n.n(i).a},252:function(e,t,n){"use strict";var i=n(42);n.n(i).a},254:function(e,t,n){"use strict";var i=n(43);n.n(i).a},256:function(e,t,n){},260:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var i=n(13),s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"router-anim","enter-active-class":"animated customSpeed fadeInRight"}},[t("router-view")],1)],1)};s._withStripped=!0;var r={components:{}},o=(n(112),n(2)),a=Object(o.a)(r,s,[],!1,null,null,null);a.options.__file="src/App.vue";var u=a.exports,l=n(5),c=n(15),d=n.n(c),_=n(110),p=n.n(_),h=n(25),f=n.n(h);i.a.use(l.a),i.a.use(p.a,d.a),i.a.use(f.a);var v={new_category_index:null,filtered_questions:null,new_quiz_token:null,backup_quiz:null,my_quizzes:null,categories:["Would You Rather","Love Life","General","Scenario","Yes or No","Food & Drinks","Fill in the Blanks"],quizzes:[],user:null,leaderboard:[{player:{name:"Gawgaw",pic:"/static/img/wheel.png",id:2},score:2},{player:{name:"Kroki",pic:"/static/img/wheel.png",id:3},score:1},{player:{name:"Kofi",pic:"/static/img/wheel.png",id:4},score:0}]},m={SET_USER:function(e){e.user={id:FBInstant.player.getID(),name:FBInstant.player.getName(),pic:FBInstant.player.getPhoto()}},SET_NEW_QUIZ:function(e,t){e.new_category_index=t.category_index,e.filtered_questions=t.questions,e.new_quiz_token=t.token},SET_BACKUP_QUIZ:function(e,t){e.backup_quiz=t},APPEND_NEW_QUESTION:function(e,t){e.filtered_questions.push(t)},SAVE_QUIZ:function(e,t){},GET_USER_QUIZZES:function(e,t){e.my_quizzes=t},SAVE_PLAYER_SESSION:function(e,t){var n=e.quizzes.find(function(e){return e.id==t.quiz_id});if(t.player=e.user,t.id=n.player_sessions.length,n.player_sessions.push(t),0==e.leaderboard.length)e.leaderboard.push({player:e.user,score:t.score});else for(var i=0;i<e.leaderboard.length;i++){if(e.leaderboard[i].player.id==e.user.id){e.leaderboard[i].score+=t.score;break}if(i+1==e.leaderboard.length){e.leaderboard.push({player:e.user,score:t.score});break}}}},y={setUser:function(e){(0,e.commit)("SET_USER")},loadQuiz:function(e){var t=e.commit,n=null;FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg:"wooooof"})).then(function(e){n=e}).then(function(){return d.a.post("https://gameoffriends.herokuapp.com/random",{player_id:n.getPlayerID(),signed_request:n.getSignature()})}).then(function(e){var n=f.a.decode(e.data.token,{complete:!0}).payload,i=n.question_type,s=v.categories.indexOf(i),r={category_index:s,questions:n.questions,token:e.data.token};console.log("new quiz category: "+i),console.log("new quiz index: "+s),t("SET_NEW_QUIZ",r)}).catch(function(e){console.log("error: "+e)})},loadBackupQuiz:function(e){var t=e.commit,n=null;FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg:"wooooof"})).then(function(e){n=e}).then(function(){return d.a.post("https://gameoffriends.herokuapp.com/random",{player_id:n.getPlayerID(),signed_request:n.getSignature()})}).then(function(e){var n=f.a.decode(e.data.token,{complete:!0}).payload,i=n.question_type,s=v.categories.indexOf(i),r={category_index:s,questions:n.questions,token:e.data.token};console.log("backup quiz category: "+i),console.log("backup quiz index: "+s),t("SET_BACKUP_QUIZ",r)}).catch(function(e){console.log("error: "+e)})},loadSingleQuestion:function(e,t){var n=e.commit,i=null;FBInstant.player.getSignedPlayerInfoAsync(JSON.stringify({msg:"wooooof"})).then(function(e){i=e}).then(function(){return d.a.post("https://gameoffriends.herokuapp.com/swap",{player_id:i.getPlayerID(),signed_request:i.getSignature(),token:v.new_quiz_token,index:t})}).then(function(e){var i=f.a.decode(e.data.token,{complete:!0}).payload.questions[t];n("APPEND_NEW_QUESTION",i)}).catch(function(e){console.log("error: "+e)})},saveQuiz:function(e,t){var n=e.commit,i=null,s=null,r=null;FBInstant.player.getSignedPlayerInfoAsync().then(function(e){i=e.getPlayerID(),s=e.getSignature()}).then(function(){return r={player_id:i,signed_request:s,token:v.new_quiz_token,quiz_answers:t},d.a.post("https://gameoffriends.herokuapp.com/quiz",r)}).then(function(e){console.log("resopnse: "),console.log(e),v.new_category_index=v.backup_quiz.category_index,v.filtered_questions=v.backup_quiz.questions,v.new_quiz_token=v.backup_quiz.token,console.log("new category index: "+v.new_category_index)}).catch(function(e){console.log("error: "+e)}),n("SAVE_QUIZ",t)},savePlayerSession:function(e,t){e.commit("SAVE_PLAYER_SESSION",t)},getUserQuizzes:function(e){var t=e.commit,n=null,i=null;FBInstant.player.getSignedPlayerInfoAsync().then(function(e){n=e.getPlayerID(),i=e.getSignature()}).then(function(){return d.a.get("https://gameoffriends.herokuapp.com/quiz",{headers:{player_id:n,signed_request:i}})}).then(function(e){console.log(e.data);var n=e.data.player.quizzes;t("GET_USER_QUIZZES",n)})},share:function(e){e.commit;console.log("share section"),FBInstant.updateAsync({action:"CUSTOM",cta:"Play",image:null,text:{default:"Edgar just played BASH for 9 points!",localizations:{en_US:"Edgar just played BASH for 9 points!",pt_BR:"Edgar jogou BASH por 9 pontos!"}},template:"WORD_PLAYED",data:{myReplayData:"..."},strategy:"IMMEDIATE",notification:"NO_PUSH"}).then(function(){console.log("Message was sent successfully")})},loadFriends:function(e){e.commit,FBInstant.player.getConnectedPlayersAsync().then(function(e){console.log("loadFriends: "),console.log(e.map(function(e){return{id:e.getID(),name:e.getName()}}))})}},g=new l.a.Store({state:v,mutations:m,actions:y,getters:{my_quizzes:function(e){return e.quizzes.filter(function(t){return t.owner.id==e.user.id})},friend_quizzes:function(e){return e.quizzes.filter(function(t){return t.owner.id!=e.user.id})},leaderboard:function(e){return e.leaderboard.sort(function(e,t){return t.score-e.score})},quiz:function(e){return function(t){return e.quizzes.find(function(e){return e.id==t})}}}}),q=n(59),b=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"start"}},[t("Intro")],1)};b._withStripped=!0;var z=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"intro"}},[this._m(0),this._v(" "),t("button",{attrs:{id:"start_button"},on:{click:this.start}},[this._v("START")])])};z._withStripped=!0;var w={data:function(){return{}},mounted:function(){},methods:{start:function(){this.$store.dispatch("setUser"),this.$store.dispatch("loadQuiz"),this.$router.push("/category")}}},k=(n(232),Object(o.a)(w,z,[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("How well do you friends"),t("br"),this._v("know you?")])}],!1,null,null,null));k.options.__file="src/components/Intro.vue";var x={components:{Intro:k.exports}},S=Object(o.a)(x,b,[],!1,null,null,null);S.options.__file="src/pages/Start.vue";var E=S.exports,I=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"category"}},[t("Wheel")],1)};I._withStripped=!0;var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wheel"}},[e.filtered_questions?e._e():n("div",{staticClass:"overlay"},[n("Spinner",{staticClass:"spinner",attrs:{name:"ball-grid-pulse",color:"#f4b5bc",noFadeIn:""}})],1),e._v(" "),n("h1",[e._v("CHOOSE A CATEGORY")]),e._v(" "),n("div",{attrs:{id:"wheel-container"}},[n("img",{style:e.wheelRotateTransform,attrs:{width:"400",height:"400",src:"/static/img/chart1.png",id:"wheel_img"}}),e._v(" "),n("img",{attrs:{width:"100",height:"100",src:"/static/img/pin.png",id:"pin"}})]),e._v(" "),!e.isSpinning&&e.filtered_questions?n("button",{staticClass:"category_button",on:{click:e.spin}},[e._v("SPIN")]):e._e(),e._v(" "),e.testResult?n("router-link",{staticClass:"category_button",attrs:{to:"/quiz-create",tag:"button"}},[e._v("NEXT")]):e._e()],1)};O._withStripped=!0;var C=n(44),A=n.n(C),Q={components:{Spinner:A.a},data:function(){return{degree:3960,clicks:0,activateSpinClass:!1,wheelRotateTransform:{},wheelResult:null,testResult:null,testHolder:null,isSpinning:!1}},mounted:function(){},computed:Object(l.b)(["new_category_index","filtered_questions","categories"]),methods:{spin:function(){var e=this;this.isSpinning=!0,this.clicks=this.clicks+1;var t=this.degree*this.clicks,n=this.new_category_index,i=this.categories.length,s=t+(n-i+1)*Math.round(360/i)*-1;this.wheelRotateTransform={transform:"rotate("+s+"deg)"},this.wheelResult=this.categories[n],this.testHolder=this.categories[n],setTimeout(function(){e.testResult=e.testHolder},6e3),this.loadBackup()},loadBackup:function(){this.$store.dispatch("loadBackupQuiz")}}},$=(n(235),Object(o.a)(Q,O,[],!1,null,null,null));$.options.__file="src/components/Wheel.vue";var P={components:{Wheel:$.exports}},B=Object(o.a)(P,I,[],!1,null,null,null);B.options.__file="src/pages/Category.vue";var j=B.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{key:e.question_index,attrs:{id:"quiz-create"}},[e.filtered_questions[e.question_index]?e._e():n("div",{staticClass:"overlay"},[n("Spinner",{staticClass:"spinner",attrs:{name:"ball-grid-pulse",color:"#f4b5bc",noFadeIn:""}})],1),e._v(" "),e.filtered_questions[e.question_index]?n("QuizBody",{attrs:{type:"create",current_index:e.display_index,quiz_length:e.required_length,question:e.filtered_questions[e.question_index]},on:{sendAnswer:e.storeAnswer}}):e._e(),e._v(" "),e.filtered_questions[e.question_index]?n("button",{attrs:{id:"skip_button"},on:{click:e.skip}},[e._v("CHANGE QUESTION")]):e._e()],1)])};T._withStripped=!0;var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quiz-body"}},[n("h1",[e._v("QUESTION "+e._s(e.current_index)+" OF "+e._s(e.quiz_length))]),e._v(" "),e.question&&"take"!=e.type?n("h2",{staticClass:"question"},[e._v(e._s(e.question.question))]):e._e(),e._v(" "),e.question&&"take"==e.type?n("h2",{staticClass:"question"},[e._v("\n        "+e._s(e.question.formatted_question.replace("{{first_name}}",e.first_name))+"\n    ")]):e._e(),e._v(" "),n("div",{staticClass:"choices-container"},e._l(e.question.choices,function(t,i){return n("div",[t.length>0&&"create"==e.type?n("button",{staticClass:"choices normal",on:{click:function(n){e.sendAnswer(t,i,e.question)}}},[e._v("\n                "+e._s(t)+"\n            ")]):e._e(),e._v(" "),t.length>0&&"take"==e.type?n("button",{staticClass:"choices",class:{wrong:e.has_answered&&i!=e.question.answer_index,correct:e.has_answered&&i==e.question.answer_index,normal:!e.has_answered,"no-hover":e.has_answered},on:{click:function(t){e.checkAnswer(e.question,i)}}},[e._v("\n                "+e._s(t)+"\n            ")]):e._e(),e._v(" "),t.length>0&&"replay"==e.type?n("button",{staticClass:"choices no-hover",class:{normal:i!=e.question.answer_index&&i!=e.guess_index,correct:i==e.question.answer_index,selected:i==e.guess_index}},[e._v("\n                "+e._s(t)+"\n            ")]):e._e()])}))])};R._withStripped=!0;var N={data:function(){return{has_answered:!1}},props:["current_index","quiz_length","question","type","first_name","guess_index"],methods:{sendAnswer:function(e,t,n){this.$emit("sendAnswer",[e,n,t])},checkAnswer:function(e,t){var n=this;this.has_answered=!0,setTimeout(function(){n.$emit("sendAnswer",[e,t])},100)}}},U=(n(237),Object(o.a)(N,R,[],!1,null,null,null));U.options.__file="src/components/QuizBody.vue";var F=U.exports,L={components:{QuizBody:F,Spinner:A.a},data:function(){return{question_index:0,display_index:1,required_length:5,new_quiz_questions:[],no_skip:!0,skip_times:0}},computed:Object(l.b)(["filtered_questions"]),methods:{storeAnswer:function(e){var t=e[0],n=e[1],i=(e[2],{question:n.question,answer:t});console.log(i),this.new_quiz_questions.push(i),this.display_index<this.required_length?(this.question_index++,this.display_index++):(this.$store.dispatch("saveQuiz",this.new_quiz_questions),this.$router.push("/end"))},skip:function(){this.$store.dispatch("loadSingleQuestion",this.question_index),this.question_index++,this.no_skip=!1,this.skip_times++}}},H=(n(239),Object(o.a)(L,T,[],!1,null,null,null));H.options.__file="src/pages/QuizCreate.vue";var D=H.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{key:e.display_index,attrs:{id:"quiz-take"}},[e.chosen_quiz?n("QuizBody",{attrs:{type:"take",current_index:e.display_index,quiz_length:e.chosen_quiz.questions.length,question:e.chosen_quiz.questions[e.question_index],first_name:e.chosen_quiz.owner.name},on:{sendAnswer:e.checkAnswer}}):e._e(),e._v("\n\n        score: "+e._s(e.score)+"\n    ")],1)])};M._withStripped=!0;var G={components:{QuizBody:F},data:function(){return{chosen_quiz:null,question_index:0,display_index:1,score:0,player_answers:[],player_session:{quiz_id:null,answers:[],score:0}}},mounted:function(){this.chosen_quiz=this.$store.getters.quiz(this.$route.params.id)},methods:{checkAnswer:function(e){var t=e[0],n=e[1];this.player_answers.push(n),n==t.answer_index&&this.score++,this.display_index<this.chosen_quiz.questions.length?(this.question_index++,this.display_index++):(this.player_session.quiz_id=this.chosen_quiz.id,this.player_session.answers=this.player_answers,this.player_session.score=this.score,this.$store.dispatch("savePlayerSession",this.player_session),this.$router.push("/home"))}}},Z=Object(o.a)(G,M,[],!1,null,null,null);Z.options.__file="src/pages/QuizTake.vue";var W=Z.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.display_index,attrs:{id:"quiz-replay"}},[e.player_session?n("QuizBody",{attrs:{type:"replay",current_index:e.display_index,quiz_length:e.quiz.questions.length,question:e.quiz.questions[e.question_index],guess_index:e.player_session.answers[e.question_index]}}):e._e(),e._v(" "),e.player_session&&e.display_index!=e.quiz.questions.length?n("button",{attrs:{id:"next_button"},on:{click:e.next}},[e._v("\n        NEXT\n    ")]):e._e(),e._v(" "),e.player_session&&e.display_index==e.quiz.questions.length?n("button",{attrs:{id:"next_button"},on:{click:e.close}},[e._v("\n        END\n    ")]):e._e()],1)};Y._withStripped=!0;var J={components:{QuizBody:F},data:function(){return{question_index:0,display_index:1,quiz:null,player_session:null}},mounted:function(){var e=this.$route.params.quiz_session.split("."),t=parseInt(e[0]),n=parseInt(e[1]);this.quiz=this.$store.getters.quiz(t),this.player_session=this.quiz.player_sessions.find(function(e){return e.id==n})},methods:{next:function(){this.question_index++,this.display_index++},close:function(){this.$router.push("/home")}}},V=(n(241),Object(o.a)(J,Y,[],!1,null,null,null));V.options.__file="src/pages/QuizReplay.vue";var K=V.exports,X=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"end"}},[t("Outro")],1)};X._withStripped=!0;var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"outro"}},[n("div",{staticClass:"home_link"},[n("h3",[n("router-link",{staticClass:"home_link_text",attrs:{to:"/home"}},[e._v("HOME")])],1)]),e._v(" "),n("div",{attrs:{id:"end_body"}},[n("h1",{attrs:{id:"end_header"}},[e._v("Your quiz is ready!")]),e._v(" "),n("img",{attrs:{width:"130",height:"130",src:e.user.pic,id:"prof_pic"}}),e._v(" "),n("h2",{attrs:{id:"end_question"}},[e._v("How well do you"),n("br"),e._v("know "+e._s(e.user.name)+"?")]),e._v(" "),e._m(0),e._v(" "),n("button",{attrs:{id:"end_button"},on:{click:e.share}},[e._v("\n            SHARE\n        ")]),e._v(" "),n("div",{attrs:{id:"create_link"}},[n("router-link",{attrs:{to:"/category",id:"create_link_text"},on:{click:e.newGame}},[e._v("Create new quiz")])],1)])])};ee._withStripped=!0;var te={data:function(){return{}},mounted:function(){},computed:Object(l.b)(["user"]),methods:{share:function(){this.$store.dispatch("share")},newGame:function(){this.$router.push("/category")}}},ne=(n(243),Object(o.a)(te,ee,[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"end_message"}},[this._v("Send your quiz to your"),t("br"),this._v("friends and find out"),t("br"),this._v("who knows you best!")])}],!1,null,null,null));ne.options.__file="src/components/Outro.vue";var ie={components:{Outro:ne.exports}},se=Object(o.a)(ie,X,[],!1,null,null,null);se.options.__file="src/pages/End.vue";var re=se.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"banner"}},[n("h1",{staticClass:"bold"},[e._v("THE FRIENDSHIP GAME")]),e._v(" "),n("router-link",{attrs:{to:"/category",tag:"button",id:"play_button"}},[e._v("Play")])],1),e._v(" "),n("div",{staticClass:"body_margin",attrs:{id:"quizzes_me"}},[n("QuizList",{attrs:{list_title:"My Quizzes",quiz_set:e.my_quizzes,button_type:"leaderboard",owner:e.user}})],1),e._v(" "),n("Leaderboard",{attrs:{leaderboard:e.leaderboard,type:"home_leaderboard"}})],1)};oe._withStripped=!0;var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quiz-list"}},[n("h3",{staticClass:"bold"},[e._v(e._s(e.list_title))]),e._v(" "),n("swiper",{staticClass:"quiz_container",attrs:{options:e.swiperOption}},[e._l(e.quiz_set,function(t){return n("swiper-slide",{staticClass:"quiz_panel"},[n("div",{staticClass:"prof_pic"},[n("img",{attrs:{width:"80",height:"80",src:e.owner.pic}})]),e._v(" "),n("div",{staticClass:"quiz_panel_label"},[n("label",[e._v(e._s(t.question_type)),n("br"),e._v("by "+e._s(e.owner.name))])]),e._v(" "),n("div",["play"==e.button_type?n("button",{staticClass:"quiz_panel_button",on:{click:function(n){e.takeQuiz(t)}}},[e._v(" Play ")]):e._e(),e._v(" "),"leaderboard"==e.button_type?n("button",{staticClass:"quiz_panel_button",on:{click:function(n){e.viewLeaderboard(t)}}},[e._v(" Leaderboard ")]):e._e()])])}),e._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)};ae._withStripped=!0;n(245);var ue=n(60),le={components:{swiper:ue.swiper,swiperSlide:ue.swiperSlide},props:["list_title","quiz_set","button_type","owner"],data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{takeQuiz:function(e){},viewLeaderboard:function(e){}}},ce=(n(248),Object(o.a)(le,ae,[],!1,null,null,null));ce.options.__file="src/components/QuizList.vue";var de=ce.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body_margin",attrs:{id:"leaderboard"}},[n("h3",{staticClass:"bold",class:{leaderboard_header:"quiz_leaderboard"==e.type}},[e._v("Leaderboard")]),e._v(" "),e._l(e.leaderboard,function(t,i){return n("div",{staticClass:"leaderboard_item bold",class:{leaderboard_item_link:"quiz_leaderboard"==e.type,leaderboard_item_list:"home_leaderboard"==e.type},on:{click:function(n){e.viewReplay(t.id)}}},[n("div",{staticClass:"leaderboard_rank"},[e._v(e._s(i+1))]),e._v(" "),n("div",[n("img",{attrs:{width:"40",height:"40",src:t.player.pic}})]),e._v(" "),n("div",{staticClass:"leaderboard_name"},[e._v(e._s(t.player.name))]),e._v(" "),n("div",{staticClass:"leaderboard_score"},[e._v(e._s(t.score))])])})],2)};_e._withStripped=!0;var pe={props:["leaderboard","type","quiz_id"],methods:{viewReplay:function(e){if("quiz_leaderboard"==this.type){var t=this.quiz_id+"."+e;this.$router.push("/quiz-replay/"+t)}}}},he=(n(250),Object(o.a)(pe,_e,[],!1,null,null,null));he.options.__file="src/components/Leaderboard.vue";var fe=he.exports,ve={components:{QuizList:de,Leaderboard:fe},data:function(){return{quizzes:null}},mounted:function(){this.quizzes=this.$store.dispatch("getUserQuizzes")},computed:Object(l.b)(["user","my_quizzes","friend_quizzes","leaderboard"])},me=(n(252),Object(o.a)(ve,oe,[],!1,null,null,null));me.options.__file="src/pages/Home.vue";var ye=me.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quiz-leaderboard"}},[n("div",{staticClass:"home_link"},[n("h3",[n("router-link",{staticClass:"home_link_text",attrs:{to:"/home"}},[e._v("HOME")])],1)]),e._v(" "),e.quiz?n("div",{attrs:{id:"leaderboard_title"}},[n("h1",[e._v(e._s(e.quiz.category))]),e._v(" "),n("h1",[e._v("by "+e._s(e.quiz.owner.name))])]):e._e(),e._v(" "),e.quiz?n("div",{attrs:{id:"leaderboard_container"}},[n("Leaderboard",{attrs:{leaderboard:e.quiz.player_sessions,type:"quiz_leaderboard",quiz_id:e.quiz.id}})],1):e._e()])};ge._withStripped=!0;var qe={components:{Leaderboard:fe},data:function(){return{quiz:null}},mounted:function(){this.quiz=this.$store.getters.quiz(this.$route.params.id)}},be=(n(254),Object(o.a)(qe,ge,[],!1,null,null,null));be.options.__file="src/pages/QuizLeaderboard.vue";var ze=be.exports;i.a.use(q.a);var we=new q.a({routes:[{path:"/",name:"start",component:E},{path:"/category",name:"category",component:j},{path:"/quiz-create",name:"quiz-create",component:D},{path:"/quiz-take/:id",name:"quiz-take",component:W},{path:"/quiz-replay/:quiz_session",name:"quiz-replay",component:K},{path:"/end",name:"end",component:re},{path:"/home",name:"home",component:ye},{path:"/quiz-leaderboard/:id",name:"quiz-leaderboard",component:ze}]});n(256),n(260);new i.a({store:g,el:"#app",router:we,render:function(e){return e(u)},mounted:function(){FBInstant.initializeAsync().then(function(){FBInstant.setLoadingProgress(50),FBInstant.setLoadingProgress(100),FBInstant.startGameAsync().then(function(){this.startGame()})})},methods:{startGame:function(){}}})},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){}});