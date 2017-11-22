// note store
import * as types from '../mutation-types'

const state = {
  notes: [],  // 笔记列表
  activeNote: {}  // 活动的笔记
}

const getters = {
  // 笔记总数量
  noteTotalCount: state => {
    return state.notes.length
  },
  // 当前笔记大小
  activeNoteSize: state => {
    return state.activeNote.text ? state.activeNote.text.length : 0
  }
}

const mutations = {
  [types.ADD_NOTE] (state) {
    const newNote = {
      text: 'New Note',
      title: 'New Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [types.EDIT_NOTE] (state, text) {
    state.activeNote.text = text
    state.activeNote.title = text.length < 8 ? text : text.substring(0, 8)
  },
  [types.UPDATE_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  },
  [types.DELETE_NOTE] (state, index) {
    if (state.notes.length > 1) {
      state.notes.splice(index, 1)
    }
  }
}

const actions = {
  addNote ({ commit }) {
    commit(types.ADD_NOTE)
  },
  editNote ({ commit }, text) {
    commit(types.EDIT_NOTE, text)
  },
  updateActiveNote ({ commit }, note) {
    commit(types.UPDATE_ACTIVE_NOTE, note)
  },
  deleteNote ({ commit }, index) {
    commit(types.DELETE_NOTE, index)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
