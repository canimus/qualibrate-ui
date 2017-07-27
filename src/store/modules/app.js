import tasks from './../tmpData/tasks.js'
import userActions from './../tmpData/userActions.js'
import userActionsOptions from './../data/userActionsOptions.js'
import tagsGroups from './../tmpData/tagsGroups.js'
import _ from 'lodash'

export default {
  state: {
    tasks,
    userActions,
    userActionsOptions,
    tagsGroups,

    sidebar: {
      opened: true
    },
    techDetails: {
      opened: false
    },
    taskEditorOpened: false,
    modal: {
      opened: false,
      imageSrc: ''
    },
    activeTask: {},
    activeUserAction: {id: '0'},
    activeStep: {}
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
    },

    activeStep (state) {
      return state.activeStep
    },

    selectedTags (state) {
      let selectedTags = state.tagsGroups.allTags.filter(tag => {
        if (_.indexOf(state.tagsGroups.selected, tag.id) > 0) {
          return tag
        }
      })

      return selectedTags
    },

    unselectedTags (state) {
      let unselectedTags = state.tagsGroups.allTags.filter(tag => {
        if (_.indexOf(state.tagsGroups.selected, tag.id) === -1) {
          return tag
        }
      })

      return unselectedTags
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

    toggleTagsEditor (state) {
      state.taskEditorOpened = !state.taskEditorOpened
    },

    openModal (state, imageSrc) {
      state.modal.imageSrc = imageSrc
      state.modal.opened = true
    },

    closeModal (state) {
      state.modal.imageSrc = ''
      state.modal.opened = false
    },

    updateTasks (state, tasks) {
      state.tasks = tasks
    },

    setActiveTask (state, task) {
      state.activeTask = task
    },

    setActiveUserAction (state, userAction) {
      state.activeUserAction = userAction
    },

    setActiveStep (state, step) {
      state.activeStep = step
    },

    removeTag (state, tagId) {
      state.tagsGroups.selected = _.remove(state.tagsGroups.selected, (selectedId) => {
        return selectedId !== tagId
      })
    },

    selectTag (state, tagId) {
      state.tagsGroups.selected.push(tagId)
    }
  }
}
