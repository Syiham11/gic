import $axios from '../api.js'

const state = () => ({
kontaks: [],
    kontak: {
        name: '',
        email: '',
        tlp: ''
    }
})

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.kontaks = payload
    },
    ASSIGN_FORM(state, payload) {
        state.kontak = payload
    },
    CLEAR_FORM(state) {
        state.kontak = {
            name: '',
            email: '',
            tlp: ''

        }
    }
}

const actions = {
    getKontaks({ commit }) {
        return new Promise((resolve) => {
            $axios.get(`/kontaks`)
            .then((response) => {
                commit('ASSIGN_DATA', response)
                resolve(response)
            })
            .catch((error) => {
                  if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    createKontak({state, commit,dispatch }) {
        return new Promise((resolve) => {
            $axios.post(`/kontaks`, state.kontak)
            .then((response) => {
                dispatch('getKontaks').then(() => {
                    resolve(response)
                })
            })
            .catch((error) => {
                  if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
  
    editKontak({ commit }, payload) {
        return new Promise((resolve) => {
            $axios.get(`/kontaks/${payload}`)
            .then((response) => {
                commit('ASSIGN_FORM', response.data)
                resolve(response.data)
            })
            .catch((error) => {
                  if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    updateKontak({commit, state}, payload) {
        return new Promise((resolve) => {
            $axios.put(`/kontaks/${payload}`, state.kontak)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                  if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },

    removeKontak({ dispatch,commit }, payload) {
        return new Promise((resolve) => {
            $axios.delete(`/kontaks/${payload}`)
            .then(() => {
                dispatch('getKontaks').then(() => resolve())
            })
            .catch((error) => {
                  if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    }
 }
 
export default {
    namespaced: true,
    state,
    actions,
    mutations
}
