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
              :rules="emailRules"
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
    user: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      inputRules: [
        v => v.length >= 2 || 'Minimum length is 2'
      ],
      emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
  watch: {
    show: function (newValue, old) {
      if (!newValue) {
        this.$store.dispatch('users/loadUsers')
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
