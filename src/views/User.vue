<template>
  <div class="user pa-6">
    <h1>User management UI</h1>
      <v-container class="mb-6">
        <v-row>
          <v-btn class="mt-3" color="primary" @click.native="openDialog('newUser')">
            Add new user
          </v-btn>
        </v-row>
        <v-row align="center" no-gutters style="height: 150px;">
          <v-col v-for="user in allUsers" :key="user.Id">
            <v-card class="mx-auto my-12" max-width="374">
              <v-img height="250" src="@/assets/user-logo.png"></v-img>
              <v-card-title>User Info</v-card-title>
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  Name: {{user.firstName}} {{user.lastName}}
                </div>
                <div class="my-4 text-subtitle-1">
                  Phone number: {{user.phoneNumber}}
                </div>
                <div class="my-4 text-subtitle-1">
                  Email: {{user.email}}
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn color="indigo darken-4" text @click.native="openDialog('details', user)">
                  Details
                </v-btn>
                <v-btn color="red lighten-2" text @click.native="openDialog('delete', user)">
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
    <delete-dialog v-model="showDeleteDialog" :id="selectedUser.id" @deleteUser="this.deleteUser"></delete-dialog>
    <user-dialog v-model="showUserDialog" :user="selectedUser" @deleteTask="deleteUser"></user-dialog>
    <new-user-dialog v-model="showNewUserDialog" @addUser="this.addUser"></new-user-dialog>
  </div>
</template>

<script>
import DeleteDialog from "../components/dialogs/DeleteDialog";
import UserDialog from "../components/dialogs/UserDialog";
import NewUserDialog from "../components/dialogs/NewUserDialog";

  export default {
    name: 'Home',
    data() {
      return {
        isLoading: false,
        error: null,
        showDeleteDialog: false,
        showUserDialog: false,
        showNewUserDialog: false,
        selectedUser: {}
      }
    },
    methods: {
      openDialog(dialog, user = null) {
        if (dialog !== "newUser") this.selectedUser = user;
        //this.taskId = user.id;
        //this.title = user.title;
        if (dialog === "delete") this.showDeleteDialog = true;
        if (dialog === "details") this.showUserDialog = true;
        if (dialog === "newUser") this.showNewUserDialog = true;
      },
      addUser(user) {
        //console.log(user)
      },
      deleteUser(id) {
        console.log('id: ' + id)
      },
      async loadUsers(refresh = false) {
        this.isLoading = true;
        try{
          await this.$store.dispatch('users/loadUsers', {forceRefresh: refresh});
        } catch(err){
          this.error = err.message || 'something wong';
        }
        this.isLoading = false;
      },
    },
    computed: {
      allUsers() {
        return this.$store.getters['users/users'];
      }
    },
    created() {
        this.loadUsers();
    },
    components: {
        DeleteDialog,
        UserDialog,
        NewUserDialog
    }
  }
</script>
