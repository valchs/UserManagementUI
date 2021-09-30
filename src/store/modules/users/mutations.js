export default {
  setUsers (state, payload) {
    state.users = payload
  },
  addUser (state, payload) {
    const users = state.users
    users.push(payload)
    state.users = users
  }
}
