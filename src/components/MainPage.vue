<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field v-model="new_question_text" placeholder="ここに共有する質問文を記入"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn justify="end" @click="addQuestion()">登録</v-btn>
        <!-- <v-btn justify="end" @click="say(new_question_text)">登録</v-btn> -->
      </v-col>
      <!-- <v-col>
        <v-btn>送信</v-btn>
      </v-col>-->
      <!-- <v-col></v-col> -->
    </v-row>

    <v-row>
      <v-card class="mx-auto" min-width="300" max-width="800" tile>
        <div v-for="(q, i) in questions" :key="i">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">{{q.text}}</v-list-item-title>
              <v-list-item-subtitle class="">
                <v-icon size="small" @click="say('未実装')">thumb_up</v-icon>
                {{q.upvote}}
                <v-icon size="small" @click="say('未実装')">thumb_down</v-icon>
                {{q.downvote}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </div>
      </v-card>
    </v-row>

    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >{{ eco.text }}</a>
        </v-row>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDK85t09jdqfW6nWZYX-oZ8scs2nGYDQE4",
  authDomain: "zerobyou-d781c.firebaseapp.com",
  databaseURL: "https://zerobyou-d781c.firebaseio.com",
  projectId: "zerobyou-d781c",
  storageBucket: "zerobyou-d781c.appspot.com",
  messagingSenderId: "233388658632",
  appId: "1:233388658632:web:5080f22b983c3844db3afd",
  measurementId: "G-1MGJHH84SV"
};
firebase.initializeApp(firebaseConfig);

export default {
  name: "MainPage",

  data: () => ({
    new_question_text: "",
    questions: [
      {
        text: "今日やって良かったことと、その理由は？",
        upvote: 10,
        downvote: 2
      },
      {
        text: "1年後までにやるべきことは？",
        upvote: 1,
        downvote: 2
      },
      {
        text:
          "今身近でこうなりたいと思う人はいるか？なぜそうなりたいと思うのか？",
        upvote: 4,
        downvote: 2
      }
    ],
    addQuestion(){
      if (""==this.new_question_text) {
        alert("登録文が空です。")
        return
      }
      var question = {
        text: this.new_question_text,
        upvote: 0,
        downvote: 0
      }
      firebase.firestore().collection("questions").add(question)
    }

  }),
  methods: {
    say: function (msg){
      alert(msg)
    },
    
  }
};
</script>
