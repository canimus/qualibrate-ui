export default {
  state: {
    sidebar: {
      opened: true
    }
  },

  getters: {
    sidebarOpened (state) {
      return state.sidebar.opened
    }
  },

  mutations: {
    toggleSidebar (state) {
      state.sidebar.opened = !state.sidebar.opened
    }
  }
}
