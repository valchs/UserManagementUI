<template>
  <v-dialog
    v-model="show"
    max-width="550px"
  >
    <v-card>
      <v-card-title class="headline justify-center">
        Add a new user
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          class="px-3"
        >
          <v-text-field
            v-model="firstName"
            label="First name"
            :rules="inputRules"
          />
          <v-text-field
            v-model="lastName"
            label="Last name"
            :rules="inputRules"
          />
          <v-text-field
            v-model="phoneNumber"
            label="Phone number"
            prepend-icon="mdi-cellphone"
            :rules="inputRules"
          />
          <v-text-field
            v-model="email"
            label="E-mail"
            prepend-icon="mdi-email"
            :rules="emailRules"
          />
          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit"
          >
            Add
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      inputRules: [
        v => v.length >= 2 || 'Minimum length is 2'
      ],
      emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      usr: {}
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    show: function (newValue, old) {
      if (!newValue) {
        this.$refs.form.resetValidation()
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.usr = {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email
        }
        this.$store.dispatch('users/registerUser', this.usr)
          .catch(() => {
          })
          .finally(() => {
            this.clearForm()
            this.closeDialog()
          })
      }
    },
    closeDialog () {
      this.show = false
    },
    clearForm () {
      this.firstName = ''
      this.lastName = ''
      this.phoneNumber = ''
      this.email = ''
    }
  }
}
</script>
