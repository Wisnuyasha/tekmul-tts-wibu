<template>
  <div class="w-full min-h-screen bg-[url('https://pbs.twimg.com/media/EWQc6lhU0AAHA17?format=jpg&name=large')] bg-cover bg-fixed">
    <img src="https://1a23.com/wp-content/uploads/2022/01/Sekai-logo.png" class="mx-auto" width="600" alt="">
    <div class="w-[1200px] mx-auto grid grid-cols-2">
        <div class="w-full ml-3">
            <h1 class="text-center text-xl text-gray-700 font-bold">{{ characterList[this.$route.params.char].name }}</h1>
            <img :src="characterList[this.$route.params.char].image" class="mt-3 mx-auto border-2 rounded-lg object-cover w-[350px] h-[580px] backdrop-blur-md bg-slate-200/[.06] shadow" width="500" alt="">
        </div>
        <div class="ml-5 mt-3 mb-2 ">
          <div>
              <div class="p-2 rounded-lg border-2">
                  <div class="px-3 py-2 border-2 rounded-lg">
                      <label class="block w-full">
                          <span class="text-gray-500 text-sm">Text (500 words limitation)</span>
                          <textarea v-model="text" data-testid="textbox" class="scroll-hide w-full rounded-lg border-2 p-2" placeholder="" rows="7" style="overflow-y: scroll; height: 168px;"></textarea>
                      </label>
                  </div>
                  <div class="relative w-full border-2 mt-2 px-3 py-2 rounded-lg">
                      <label for="default-range" class="block mb-2 text-sm">
                          <span class="text-gray-500 text-sm">Speed</span>
                          <span class="text-gray-500 text-sm absolute right-3">{{speed}}</span>
                      </label>
                      <input id="default-range" type="range" min="0.1" max="2.0" v-model="speed" step="0.1" class="w-full h-2 bg-sky-500 rounded-lg appearance-none cursor-pointer">
                  </div>
                  <div class="w-full mt-2 rounded-lg p-2 text-center font-bold bg-sky-400/[0.7] cursor-pointer hover:bg-sky-400">
                      <h1 @click="generateAudio" class="text-sky-900">Generate</h1>
                  </div>
              </div>
              <div class="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 mt-2 rounded-lg">
                  <div id="component-19" class="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 rounded-lg">
                      <div class="absolute left-0 top-0 py-1 px-2 rounded-br-lg shadow-sm text-xs text-gray-500 flex items-center pointer-events-none bg-white z-20 border-b border-r border-gray-100">
                          <span class="mr-2 h-[12px] w-[12px] opacity-80">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                          </span>
                          Output Audio
                      </div>
                      <div class="h-full min-h-[8rem] flex justify-center items-center">
                          <div class="h-5 opacity-50">
                              <svg v-if="audio == null" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                              <audio v-if="audio != null" class="w-full" controls="" preload="metadata" :src="audio"></audio>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  setup() {
    const characterList = {
      "hoshino_ichika": {
        "name": "Hoshino Ichika",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "tenma_saki": {
        "name": "Tenma Saki",
        "image": "https://static.miraheze.org/projectsekaiwiki/d/d0/Saki.png",
      },
      "mochizuki_honami": {
        "name": "Mochizuki Hona",
        "image": "https://static.miraheze.org/projectsekaiwiki/4/40/Honami.png",
      },
      "hinomori_shiho": {
        "name": "Hinomori Shiho",
        "image": "https://static.miraheze.org/projectsekaiwiki/8/87/Shiho.png",
      },
      "hanasato_minori": {
        "name": "Hanasato Minori",
        "image": "https://static.miraheze.org/projectsekaiwiki/1/1a/Minori.png",
      },
      "kiritani_haruka": {
        "name": "Kiritani Haruka",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b1/Haruka.png",
      },
      "momoi_airi": {
        "name": "Momoi Airi",
        "image": "https://static.miraheze.org/projectsekaiwiki/9/96/Airi.png",
      },
      "hinomori_shizuku": {
        "name": "Hinomori Shizu",
        "image": "https://static.miraheze.org/projectsekaiwiki/a/ac/Shizuku.png",
      },
      "azusawa_kohane": {
        "name": "Azusawa Kohane",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b4/Kohane.png",
      },
      "shiraishi_an": {
        "name": "Shiraishi An",
        "image": "https://static.miraheze.org/projectsekaiwiki/8/8a/An.png",
      },
      "shinonome_akito": {
        "name": "Shinonome Akito",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Akito.png",
      },
      "aoyagi_toya": {
        "name": "Aoyagi Toya",
        "image": "https://static.miraheze.org/projectsekaiwiki/e/e9/Toya.png",
      },
      "tenma_tsukasa": {
        "name": "Tenma Tsukasa",
        "image": "https://static.miraheze.org/projectsekaiwiki/c/cc/Tsukasa.png",
      },
      "ootori_emu": {
        "name": "Ootori Emu",
        "image": "https://static.miraheze.org/projectsekaiwiki/5/5d/Emu.png",
      },
      "kusanagi_nene": {
        "name": "Kusanagi Nene",
        "image": "https://static.miraheze.org/projectsekaiwiki/5/57/Nene.png",
      },
      "kamishiro_rui": {
        "name": "Kamishiro Rui",
        "image": "https://static.miraheze.org/projectsekaiwiki/1/1e/Rui.png",
      },
      "yoisaki_kanade": {
        "name": "Yoisaki Kanade",
        "image": "https://static.miraheze.org/projectsekaiwiki/2/2e/Kanade.png",
      },
      "asahina_mafuyu": {
        "name": "Asahina Mafuyu",
        "image": "https://static.miraheze.org/projectsekaiwiki/1/16/Mafuyu.png",
      },
      "shinonome_ena": {
        "name": "Shinonome Ena",
        "image": "https://static.miraheze.org/projectsekaiwiki/c/c8/Ena.png",
      },
      "akiyama_mizuki": {
        "name": "Akiyama Mizuki",
        "image": "https://static.miraheze.org/projectsekaiwiki/9/9c/Mizuki.png",
      },
    }
    return {
      characterList,
    };
  },
  data() {
    return {
      text: "",
      speaker: "hoshino_ichika",
      speed: 1.0,
      audio: null,
    };
  },
  methods: {
    generateAudio() {
      // Connect to websocket
      let socket = new WebSocket("wss://kdrkdrkdr-prosekatts.hf.space/queue/join");
      let sendText = this.text;
      let sendSpeaker = this.speaker;
      let sendSpeed = this.speed;
      let audioReceive = null;
      let that = this;
      // Connection opened
      socket.addEventListener('open', function (event) {
          socket.send(JSON.stringify({"session_hash":"o32vbsauejd","fn_index":0}));
      });
      // Listen for messages
      socket.addEventListener('message', async function (event) {
          console.log('Message from server ', event.data);

          // Parse message
          let data = JSON.parse(event.data);

          if(data.msg == "send_data") {
              socket.send(JSON.stringify({
                  "fn_index":0,
                  "data":[
                      sendText,
                      sendSpeaker,
                      sendSpeed,
                      false
                  ],
                  "session_hash":"o32vbsauejd"}
              ));
          }

          if(data.msg == "process_completed") {
            that.audio = "https://kdrkdrkdr-prosekatts.hf.space/file=" + data.output.data[1].name;

          }
      });
      // Listen for errors
      socket.addEventListener('error', function (event) {
          console.log('Error from server ', event.data);
      });
      // Listen for close
      socket.addEventListener('close', function (event) {
          console.log('Close from server ', event.data);
      });
    },
  },
};
</script>
