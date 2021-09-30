<template>
  <div class="about pa-6">
    <h1 class="mb-5">
      Vue.js Frontend
    </h1>
    <p>
      This project is a frontend implementation using Vue.js + Vuetify for my backend project.
    </p>
    <p class="mb-10">
      Backend web API was created on .NET Core 3.1 and data is stored in SQL Server database. Both API and database is hosted on Azure.<br>
    </p>
    <p class="text-h6">
      Backend:
      <v-btn
        class="ml-1 mr-2"
        outlined
        color="indigo"
        href="https://github.com/valchs/UserManagementAPI"
        target="_blank"
      >
        Source
        <v-icon
          right
          dark
        >
          mdi-github
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"

        color="success"
        href="https://usrmanagementapi.azurewebsites.net/swagger/index.html"
        target="_blank"
      >
        Documentation
      </v-btn>
    </p>
    <v-divider />
    <p class="text-h6 mt-5">
      Frontend:
      <v-btn
        class="ml-1 mr-2"
        outlined
        color="indigo"
        href="https://github.com/valchs/UserManagementUI"
        target="_blank"
      >
        Source
        <v-icon
          right
          dark
        >
          mdi-github
        </v-icon>
      </v-btn>
    </p>
  </div>
</template>
