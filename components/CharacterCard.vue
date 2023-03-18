<!-- Please remove this file from your project -->
<template>
    <div class="bg-white flex justify-center cursor-pointer overflow-hidden shadow p-6 m-5 rounded-lg
    transition ease-in delay-150 duration-300 hover:items-center hover:scale-110"
    @click="redirect"
    >
    <img src="~/assets/Harukacrop.png" class="z-1 inset-0"/>
      <h2 class="text-2xl leading-7 font-semibold z-2">
        {{  title  }}
      </h2>
    </div>
</template>
  
  <script>
  export default {
    name: 'CharacterCard',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        redirect() {
            console.log(this.title);
            this.$router.push({
                name: 'character',
                params: {
                    id: this.title
                },
                query: {
                    title: this.title
                }
            })
        }
    }
  }
  </script>
  