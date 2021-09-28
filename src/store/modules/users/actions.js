import axios from 'axios'

export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coach = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const resp = await fetch(`https://coaching-111d9-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coach)
        });

        //const respData = await resp.json();

        if(!resp.ok) {
            // errrrrr
        }

        context.commit('registerCoach', {
            ...coach,
            id: userId
        });
    },
    loadUsers(context, payload) {
        // if(!payload.forceRefresh && !context.getters.shouldUpdate) {
        //     return;
        // }

        return new Promise((resolve, reject) => {
            axios.get('https://localhost:44309/api/Users')
              .then(d => {
                  console.log(d)
                context.commit('setUsers', d.data);
                resolve(d.data)
              })
              .catch(e => {
                reject(e)
              })
          })

        // const resp = await fetch('https://localhost:44309/api/Users');
        // const respData = await resp.json();

        // if (!resp.ok) {
        //     const error = new Error(respData.message || 'Failed to fetch!');
        //     throw error;
        // }

        // const users = [];

        // for (const key in respData) {
        //     const user = {
        //         id: respData[key].id,
        //         firstName: respData[key].firstName,
        //         lastName: respData[key].lastName,
        //         phoneNumber: respData[key].phoneNumber,
        //         email: respData[key].email
        //     };
        //     users.push(user);
        // }

        // context.commit('setUsers', users);
        // context.commit('setFetchTimestamp');

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

    async registerUser2(context, data) {
        const user = {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            email: data.email
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "accept": "*/*" },
            body: JSON.stringify(user)
          };

        const resp = await fetch(`https://localhost:44309/api/Users`, {requestOptions});

        const respData = await resp.json();
console.log(respData)
        if(!resp.ok) {
            // errrrrr
            console.log('error')
        }
        context.commit('registerUser', {
            ...user,
            //id: userId
        });
    },
};