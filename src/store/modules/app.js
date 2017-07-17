import tasks from './../tmpData/tasks.js'
import userActions from './../tmpData/userActions.js'
import userActionsOptions from './../data/userActionsOptions.js'

export default {
  state: {
    tasks,
    userActions,
    userActionsOptions,

    sidebar: {
      opened: true
    },
    techDetails: {
      opened: false
    },
    modal: {
      opened: false,
      imageSrc: ''
    },
    activeTask: {},
    activeUserAction: {id: '0'}

  },

  getters: {
    sidebarOpened (state) {
      return state.sidebar.opened
    },

    techDetailsOpened (state) {
      return state.techDetails.opened
    },

    activeTask (state) {
      return state.activeTask
    },

    activeUserAction (state) {
      return state.activeUserAction
    },

    userActionsOptions (state) {
      return state.userActionsOptions
    }

  },

  mutations: {
    toggleSidebar (state) {
      state.sidebar.opened = !state.sidebar.opened
    },

    toggleTechDetails (state) {
      state.techDetails.opened = !state.techDetails.opened

      if (state.techDetails.opened) {
        state.sidebar.opened = true
      } else {
        state.sidebar.opened = false
      }
    },

    openModal (state, imageSrc) {
      state.modal.imageSrc = imageSrc
      state.modal.opened = true
    },

    closeModal (state) {
      state.modal.imageSrc = ''
      state.modal.opened = false
    },

    setActiveTask (state, task) {
      state.activeTask = task
    },

    setActiveUserAction (state, userAction) {
      state.activeUserAction = userAction
    }

  }
}
