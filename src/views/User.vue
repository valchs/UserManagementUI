<template>
  <div class="user pa-6">
    <h1>User management UI</h1>
    <v-container class="mb-6">
      <v-row>
        <v-btn
          class="mt-3"
          color="primary"
          @click="openDialog('newUser')"
        >
          Add new
        </v-btn>
      </v-row>
      <v-row
        align="center"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="user in allUsers"
          :key="user.Id"
        >
          <v-card
            class="mx-auto my-12"
            max-width="374"
          >
            <v-img
              height="250"
              src="@/assets/user-logo.png"
            />
            <v-card-title>User {{ user.id }}</v-card-title>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="font-weight-bold">Name:</span> {{ user.firstName }} {{ user.lastName }}
              </div>
              <div class="my-4 text-subtitle-1">
                <span class="font-weight-bold">Phone number:</span> {{ user.phoneNumber }}
              </div>
              <div class="my-4 text-subtitle-1">
                <span class="font-weight-bold">E-mail:</span> {{ user.email }}
              </div>
            </v-card-text>
            <v-divider class="mx-4" />
            <v-card-actions>
              <v-btn
                color="indigo darken-4"
                text
                @click="openDialog('details', user)"
              >
                Details
              </v-btn>
              <v-btn
                color="red lighten-2"
                text
                @click="openDialog('delete', user)"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <delete-dialog
      :id="selectedUser.id"
      v-model="showDeleteDialog"
    />
    <user-dialog
      v-model="showUserDialog"
      :user="selectedUser"
    />
    <new-user-dialog
      v-model="showNewUserDialog"
    />
  </div>
</template>

<script>
import DeleteDialog from '../components/dialogs/DeleteDialog'
import UserDialog from '../components/dialogs/UserDialog'
import NewUserDialog from '../components/dialogs/NewUserDialog'

export default {
  name: 'Home',
  components: {
    DeleteDialog,
    UserDialog,
    NewUserDialog
  },
  data () {
    return {
      isLoading: false,
      error: null,
      showDeleteDialog: false,
      showUserDialog: false,
      showNewUserDialog: false,
      selectedUser: {}
    }
  },
  computed: {
    allUsers () {
      return this.$store.getters['users/users']
    }
  },
  created () {
    this.loadUsers()
  },
  methods: {
    openDialog (dialog, user = null) {
      if (dialog !== 'newUser') this.selectedUser = user
      if (dialog === 'delete') this.showDeleteDialog = true
      if (dialog === 'details') this.showUserDialog = true
      if (dialog === 'newUser') this.showNewUserDialog = true
    },
    async loadUsers (refresh = false) {
      this.isLoading = true
      try {
        await this.$store.dispatch('users/loadUsers', { forceRefresh: refresh })
      } catch (err) {
        this.error = err.message || 'something wong'
      }
      this.isLoading = false
    }
  }
}
</script>
