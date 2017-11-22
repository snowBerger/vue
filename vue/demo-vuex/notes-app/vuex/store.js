// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],    // 笔记列表
	activeNote: {}  // 当前活动的笔记
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    if (state.notes.length > 0) {
      state.notes.$remove(state.activeNote)
      state.activeNote = state.notes[0]  
    }
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
	state,
	mutations
})