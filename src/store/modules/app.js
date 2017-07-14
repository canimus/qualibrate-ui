export default {
  state: {
    sidebar: {
      opened: true
    },
    techDetails: {
      opened: false
    },
    modal: {
      opened: false,
      imageSrc: ''
    }

  },

  getters: {
    sidebarOpened (state) {
      return state.sidebar.opened
    },

    techDetailsOpened (state) {
      return state.techDetails.opened
    }

  },

  mutations: {
    toggleSidebar (state) {
      state.sidebar.opened = !state.sidebar.opened
    },

    toggleTechDetails (state) {
      state.techDetails.opened = !state.techDetails.opened
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
