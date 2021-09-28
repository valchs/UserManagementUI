<template>
    <v-dialog v-model="show" max-width="550px">
      <v-card>
        <v-card-title class="headline justify-center">Add a new user</v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="First name" v-model="firstName" :rules="inputRules"></v-text-field>
                <v-text-field label="Last name" v-model="lastName" :rules="inputRules"></v-text-field>
                <v-text-field label="Phone number" v-model="phoneNumber" prepend-icon="mdi-cellphone" :rules="inputRules"></v-text-field>
                <v-text-field label="Email" v-model="email" prepend-icon="mdi-email" :rules="inputRules"></v-text-field>
                <v-btn text class="success mx-0 mt-3" @click="submit">Add</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['value'],
  data(){
      return {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          inputRules: [
              v => v.length >=1 || 'This field is required'
          ],
          usr: {}
      }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    submit() {
        if (this.$refs.form.validate()){
            //console.log(this.firstName, this.lastName, this.phoneNumber, this.email)
            this.usr = {
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              email: this.email
            }
            this.$store.dispatch('users/registerUser', this.usr)
            this.$emit("addUser", this.usr)
            this.closeDialog()
        }
    },
    closeDialog() {
      this.show = false;
    },
  },
};
</script>