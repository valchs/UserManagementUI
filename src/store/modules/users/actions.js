import axios from 'axios'

export default {
  loadUsers (context) {
    return new Promise((resolve, reject) => {
      axios.get('https://localhost:44309/api/Users')
        .then(d => {
          context.commit('setUsers', d.data)
          resolve(d.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  registerUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('https://localhost:44309/api/Users', payload)
        .then(() => {
          return context.dispatch('loadUsers')
        })
        .then(d => {
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  editUser (context, payload) {
    const { id, ...usr } = payload
    return new Promise((resolve, reject) => {
      axios.put(`https://localhost:44309/api/Users/${payload.id}`, usr)
        .then(() => {
          return context.dispatch('loadUsers')
        })
        .then(d => {
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  deleteUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`https://localhost:44309/api/Users/${payload}`)
        .then(() => {
          return context.dispatch('loadUsers')
        })
        .then(d => {
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}
