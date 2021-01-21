export const state = () => ({
  darkMode: false
})

export const mutations = {
  toggleDarkmode (state) {
    state.darkMode = !state.darkMode
  }
}
