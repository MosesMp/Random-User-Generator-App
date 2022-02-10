const app = Vue.createApp({
  data() {
    return {
      firstName: 'Moses',
      lastName: 'Mpiriirwe',
      email: 'mozebiz@gmail.com',
      gender: 'male',
      picture: 'img/profile.jpeg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      // console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },
  },
})

app.mount('#app')
