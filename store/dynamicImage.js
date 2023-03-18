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
