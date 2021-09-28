<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Delete user?
        </v-card-title>
        <v-card-text>This user will be permanently deleted.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="grey darken-1"
            text
            @click="closeDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="deleteTask"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['value', 'id'],
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
    deleteTask () {
      this.closeDialog()
      this.$emit('deleteUser', this.id)
    }
  }
}
</script>
