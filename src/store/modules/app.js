export default {
  state: {
    sidebar: {
      opened: true
    },
    modal: {
      opened: false,
      imageSrc: ''
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
    },

    openModal (state, imageSrc) {
      state.modal.imageSrc = imageSrc
      state.modal.opened = true
    },

    closeModal (state) {
      state.modal.imageSrc = ''
      state.modal.opened = false
    }

  }
}
