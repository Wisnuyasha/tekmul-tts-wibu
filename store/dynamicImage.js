//code1

// export const state = () => ({
//     imagePathByChar: {}
//   })
  
//   export const mutations = {
//     setImagePathByChar(state, { char, imagePath }) {
//       state.imagePathByChar[char] = imagePath
//     }
//   }
  
//   export const actions = {
//     setImagePathByChar({ commit }, { char, imagePath }) {
//       commit('setImagePathByChar', { char, imagePath })
//     },
//     async initImagePath({ dispatch }) {
//         // contoh pengisian imagePathByChar
//         const imagePath1 = '/path/to/image1.jpg'
//         const imagePath2 = '/path/to/image2.jpg'
//         await dispatch('setImagePathByChar', { char: 'id1', imagePath: imagePath1 })
//         await dispatch('setImagePathByChar', { char: 'id2', imagePath: imagePath2 })
//         // tambahkan pengisian imagePathByChar lainnya sesuai kebutuhan
//       }
//   }


//code2

// export const state = () => ({
//   imagePaths: {
//     path1: '/path/to/image1',
//     path2: '/path/to/image2',
//     path3: '/path/to/image3',
//     // dan seterusnya hingga path20
//   }
// })

// export const getters = {
//   getImagePath: (state) => (path) => {
//     return state.imagePaths[path] ? state.imagePaths[path] : null
//   }
// }


//code3

export const state = () => ({})

export const getters = {
  getImagePath: (state) => (char) => {
    return state[char] ? state[char].imagePath : null
  }
}

export const mutations = {
  setImagePath: (state, { char, imagePath }) => {
    state[char] = {
      imagePath
    }
  }
}