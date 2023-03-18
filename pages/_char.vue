<template>
  <div class="w-full min-h-screen bg-[url('https://pbs.twimg.com/media/EWQc6lhU0AAHA17?format=jpg&name=large')] bg-cover bg-fixed">
    <img src="https://1a23.com/wp-content/uploads/2022/01/Sekai-logo.png" class="mx-auto" width="600" alt="">
    <div class="w-[1200px] mx-auto grid grid-cols-2">
        <div class="w-full ml-3">
            <h1 class="text-center text-xl text-gray-700 font-bold">{{ characterList[this.$route.params.char].name }}</h1>
            <img :src="characterList[this.$route.params.char].image" class="mt-3 mx-auto border-2 rounded-lg object-cover w-[350px] h-[580px] backdrop-blur-md bg-slate-200/[.06] shadow" width="500" alt="">
        </div>
        <div class="ml-5 mt-3 mb-2 ">
            <div class="p-2 rounded-lg border-2 backdrop-blur-md bg-slate-200/[.06] shadow">
                <div class="px-3 py-2 border-2 rounded-lg">
                    <label class="block w-full">
                        <span class="text-gray-500 text-sm">Text (500 words limitation)</span>
                        <textarea data-testid="textbox" class="scroll-hide w-full rounded-lg border-2" placeholder="" rows="7" style="overflow-y: scroll; height: 168px;"></textarea>
                    </label>
                </div>
                <div class="relative w-full border-2 mt-2 px-3 py-2 rounded-lg">
                    <label for="default-range" class="block mb-2 text-sm">
                        <span class="text-gray-500 text-sm">Speed</span>
                    </label>
                    <input id="default-range" type="range" min="0.1" max="2" value="1" step="0.1" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer">
                </div>
                <div class="w-full mt-2 rounded-lg p-2 text-center font-bold bg-sky-400/[0.7] cursor-pointer hover:bg-sky-400">
                    <h1 class="text-sky-900">Generate</h1>
                </div>
            </div>
            <div class="p-2 rounded-lg border-2 mt-5 backdrop-blur-md bg-slate-200/[.06] shadow">
                <div class="px-3 py-2 border-2 rounded-lg">
                    <label class="block w-full">
                        <span class="text-gray-500 text-sm">Output Message</span>
                        <textarea disabled data-testid="textbox" class="scroll-hide w-full rounded-lg border-2" placeholder="" rows="1" style="overflow-y: scroll; height: 42px;"></textarea>
                    </label>
                </div>
                <div class="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 mt-2 rounded-lg">
                    <div class="absolute left-0 top-0 py-1 px-2 rounded-br-lg shadow-sm text-xs text-gray-500 flex items-center pointer-events-none bg-white z-20 border-b border-r border-gray-100">
                        <span class="mr-2 h-[12px] w-[12px] opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                        </span>
                        Output Audio
                    </div>
                    <div class="h-full min-h-[8rem] flex justify-center items-center">
                        <div class="h-5 opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                            <!-- <audio class="w-full" controls="" preload="metadata" src="https://kdrkdrkdr-prosekatts.hf.space/file=/tmp/tmp6lzavsd1/tmpx3h60799.wav"></audio> -->
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
      "ichika": {
        "name": "Hoshino Ichika",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "saki": {
        "name": "Tenma Saki",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "hona": {
        "name": "Mochizuki Hona",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "shiho": {
        "name": "Hinomori Shiho",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "minori": {
        "name": "Hanasato Minori",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "airi": {
        "name": "Kiritani Haruka",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "shizu": {
        "name": "Momoi Airi",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "kohane": {
        "name": "Azusawa Kohane",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "an": {
        "name": "Shiraishi An",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "akito": {
        "name": "Shinonome Akito",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "toya": {
        "name": "Aoyagi Toya",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "tsukasa": {
        "name": "Tenma Tsukasa",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "emu": {
        "name": "Ootori Emu",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "nene": {
        "name": "Kusanagi Nene",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "rui": {
        "name": "Kamishiro Rui",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "kanade": {
        "name": "Yoisaki Kanade",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "mafuyu": {
        "name": "Asahina Mafuyu",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "ena": {
        "name": "Shinonome Ena",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
      "mizuki": {
        "name": "Akiyama Mizuki",
        "image": "https://static.miraheze.org/projectsekaiwiki/b/b3/Ichika.png",
      },
    }
    return {
      characterList,
    };
  },
};
</script>
