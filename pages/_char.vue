<template>
  <div class="w-full h-screen bg-[url('https://pbs.twimg.com/media/EWQc6lhU0AAHA17?format=jpg&name=large')] bg-cover bg-fixed">
    <div class="mx-7">
        <img src="https://1a23.com/wp-content/uploads/2022/01/Sekai-logo.png" class="mx-auto" width="600" alt="">
        <div class="w-[1200px] mx-auto grid grid-cols-2">
            <div class="relative">
                <div class="absolute right-0">
                    <h1 class="text-center text-xl font-bold">{{ characterList[this.$route.params.char].name }}</h1>
                    <img :src="characterList[this.$route.params.char].image" width="500" alt="">
                </div>
            </div>
            <div>
                <div class="p-2 rounded-lg border-2">
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
                        <input id="default-range" type="range" min="0.1" max="2" value="1" step="0.1" class="w-full h-2 bg-sky-500 rounded-lg appearance-none cursor-pointer">
                    </div>
                    <div class="w-full mt-2 rounded-lg p-2 text-center font-bold bg-sky-400/[0.7] cursor-pointer hover:bg-sky-400">
                        <h1 class="text-sky-900">Generate</h1>
                    </div>
                </div>
                <div class="p-2 rounded-lg border-2 mt-5">
                    <div class="px-3 py-2 border-2 rounded-lg">
                        <label class="block w-full">
                            <span class="text-gray-500 text-sm">Output Message</span>
                            <textarea disabled data-testid="textbox" class="scroll-hide w-full rounded-lg border-2" placeholder="" rows="1" style="overflow-y: scroll; height: 42px;"></textarea>
                        </label>
                    </div>
                    <div id="component-19" class="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 mt-2 rounded-lg">
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
    }
    return {
      characterList,
    };
  },
};
</script>
