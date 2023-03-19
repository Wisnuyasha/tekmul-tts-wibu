<template>
  <div class="w-full h-fit flex flex-col items-center bg-[url('https://pbs.twimg.com/media/EWQc6lhU0AAHA17?format=jpg&name=large')] bg-cover bg-fixed">
      <img src="https://1a23.com/wp-content/uploads/2022/01/Sekai-logo.png" class="mx-auto" width="600" alt="">
          <div class="m-6 min-h-fit w-fit px-16 py-10 backdrop-blur-md bg-white/[.01] shadow-lg rounded-xl">
              <img src="https://static.miraheze.org/projectsekaiwiki/5/5c/Leoneed_logo_%28bordered%29.png" width="250" class="mx-auto" alt="">
              <div class="flex justify-center gap-6 w-[40%] mt-2 mx-auto">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/1/17/Charsel-ichika.png/193px-Charsel-ichika.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('hoshino_ichika')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/9/9e/Charsel-saki.png/193px-Charsel-saki.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('tenma_saki')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/1/19/Charsel-honami.png/193px-Charsel-honami.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('mochizuki_honami')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/7/79/Charsel-shiho.png/193px-Charsel-shiho.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('hinomori_shiho')">
              </div>
          </div>
          <div class="m-6 min-h-fit w-fit px-16 py-10 backdrop-blur-md bg-white/[.01] shadow-lg rounded-xl">
              <img src="https://static.miraheze.org/projectsekaiwiki/f/f1/MORE_MORE_JUMP%21_logo_%28bordered%29.png" width="250" class="mx-auto" alt="">
              <div class="flex justify-center gap-6 w-[40%] mt-2 mx-auto">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/a/a0/Charsel-minori.png/193px-Charsel-minori.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('hanasato_minori')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/2/20/Charsel-haruka.png/193px-Charsel-haruka.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('kiritani_haruka')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/0/00/Charsel-airi.png/193px-Charsel-airi.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('momoi_airi')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/e/eb/Charsel-shizuku.png/193px-Charsel-shizuku.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('hinomori_shizuku')">
              </div>
          </div>
          <div class="m-6 min-h-fit w-fit px-16 py-10 backdrop-blur-md bg-white/[.01] shadow-lg rounded-xl">
              <img src="https://static.miraheze.org/projectsekaiwiki/4/41/Vivid_BAD_SQUAD_logo_%28bordered%29.png" width="250" class="mx-auto" alt="">
              <div class="flex justify-center gap-6 w-[40%] mt-2 mx-auto">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/c/c2/Charsel-kohane.png/193px-Charsel-kohane.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('azusawa_kohane')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/2/2c/Charsel-an.png/193px-Charsel-an.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('shiraishi_an')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/a/a1/Charsel-akito.png/193px-Charsel-akito.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('shinonome_akito')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/d/da/Charsel-toya.png/193px-Charsel-toya.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('aoyagi_toya')">
              </div>
          </div>
          <div class="m-6 min-h-fit w-fit px-16 py-10 backdrop-blur-md bg-white/[.01] shadow-lg rounded-xl">
              <img src="https://static.miraheze.org/projectsekaiwiki/1/11/Wonderlands%C3%97Showtime_logo_%28bordered%29.png" width="250" class="mx-auto" alt="">
              <div class="flex justify-center gap-6 w-[40%] mt-2 mx-auto">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/5/58/Charsel-tsukasa.png/193px-Charsel-tsukasa.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('tenma_tsukasa')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/9/9f/Charsel-emu.png/193px-Charsel-emu.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('ootori_emu')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/a/ae/Charsel-nene.png/193px-Charsel-nene.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('kusanagi_nene')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/e/e1/Charsel-rui.png/193px-Charsel-rui.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('kamishiro_rui')">
              </div>
          </div>
          <div class="m-6 min-h-fit w-fit px-16 py-10 backdrop-blur-md bg-white/[.01] shadow-lg rounded-xl">
              <img src="https://static.miraheze.org/projectsekaiwiki/thumb/b/b3/25-ji%2C_Nightcord_de._logo_%28bordered%29.png/200px-25-ji%2C_Nightcord_de._logo_%28bordered%29.png" width="250" class="mx-auto" alt="">
              <div class="flex justify-center gap-6 w-[40%] mt-2 mx-auto">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/6/6a/Charsel-kanade.png/193px-Charsel-kanade.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('yoisaki_kanade')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/e/e2/Charsel-mafuyu.png/193px-Charsel-mafuyu.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('asahina_mafuyu')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/6/61/Charsel-ena.png/193px-Charsel-ena.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('shinonome_ena')">
                  <img src="https://static.miraheze.org/projectsekaiwiki/thumb/9/93/Charsel-mizuki.png/193px-Charsel-mizuki.png"
                  class="mx-auto w-40  hover:scale-110 duration-200 ease-in cursor-pointer" alt=""
                  @click="navigate('akiyama_mizuki')">
              </div>
          </div>
    </div>

</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    navigate(char) {
      this.$router.push(`/${char}`)
    }
  }
}
</script>
