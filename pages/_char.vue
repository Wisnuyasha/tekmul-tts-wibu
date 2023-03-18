<template>
    <!-- <div char="tts-input" class="relative flex flex-col justify-center overflow-hidden items-center  min-h-screen bg-gray-100 sm:pt-0">
        <img src="~/assets/Harukacrop.png" class="absolute z-0 scale-[2.2] left-14 opacity-80 blur-[1px] "/>
        <h1 class="text-gray-700 font-bold text-xl z-10 ml-96">Text to Speech with <span class="text-blue-500">Mia Khalifa</span> </h1>
        <h1 class="text-gray-800 font-[600] text-base mr-[23.3rem]">Text (500 words limitation)</h1>
        <textarea char="tts-input-text" class="p-2.5 w-1/2 text-sm text-gray-900 ml-96 bg-gray-50 rounded-lg border border-gray-300 z-10 shadow">
        </textarea> -->
        <!-- <select char="tts-speaker">
            <option value="f">tes</option>
        </select> -->
        <!-- <h1 class="text-gray-800 mt-5 font-[600] text-base ml-96 mb-2">Speed</h1>
        <input class="bg-gray-300 rounded-lg h-2  appearance-none cursor-pointer mx-auto w-1/4 z-10 shadow mr-[33rem]" type="range" char="range_id_0" name="cowbell" min="0.1" max="2" step="0.1">
        <button char="tts-input-button" class="bg-blue-500 hover:bg-blue-600 text-gray-50 font-medium rounded-lg mt-5 py-1 px-3 z-10 shadow ml-96">Generate</button>
    </div> -->
    <div class="flex w-screen min-h-screen justify-center items-center">
    <h1 class="text-5xl font-bold">{{ this.$route.params.char }}</h1>
    <h1>{{ imagePath }}</h1>
    </div>
  </template>
  
  <script>

//code1
// import { mapActions, mapState } from 'vuex'

// export default {
//   props: {
//     char: {
//       type: String,
//       required: true
//     }
//   },
//   computed: {
//     ...mapState({
//       imagePathByChar: state => state.imagePathByChar
//     }),
//     imagePath() {
//       return this.imagePathByChar[this.char] || '/path/to/default/image.jpg'
//     }
//   },
//   methods: {
//     ...mapActions({
//       setImagePathByChar: 'setImagePathByChar'
//     }),
//     async loadImage() {
//       const imagePath = await this.loadImagePath() // fungsi untuk mengambil path image dinamis
//       this.setImagePathByChar({ char: this.char, imagePath })
//     }
//   },
//   async created() {
//     await this.loadImage()
//   }
// }


//code2

  // import { mapGetters } from 'vuex'

  // export default {
  //   computed: {
  //     ...mapGetters('imagePaths', ['getImagePath']),
  //     imagePath() {
  //       return this.getImagePath('/path/to/image1')
  //     }
  //   }
  // }

//code3

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('dynamicImage', ['getImagePath']),
    imagePath() {
      return this.getImagePath(this.$route.params.char)
    }
  },
  created() {
    this.$store.commit('dynamicImage/setImagePath', {
      char: this.$route.params.char,
      imagePath: '/path/to/image'
    })
  }
}

  </script>