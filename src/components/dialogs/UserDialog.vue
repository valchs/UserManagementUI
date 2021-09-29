<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      max-width="550px"
    >
      <v-card>
        <v-card-title class="headline justify-center">
          Edit user
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="user.firstName"
              label="First Name"
              :rules="inputRules"
            />
            <v-text-field
              v-model="user.lastName"
              label="Last Name"
              :rules="inputRules"
            />
            <v-text-field
              v-model="user.phoneNumber"
              label="Phone Number"
              :rules="inputRules"
            />
            <v-text-field
              v-model="user.email"
              label="E-mail"
              :rules="inputRules"
            />
            <v-btn
              color="warning"
              @click="submit"
            >
              Edit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Boolean,
    user: Object
  },
  data () {
    return {
      inputRules: [
        v => v.length >= 1 || 'This field is required'
      ]
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
  methods: {
    closeDialog () {
      this.show = false
    },
    submit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/editUser', this.user)
        this.closeDialog()
      }
    }
  }
}
</script>
