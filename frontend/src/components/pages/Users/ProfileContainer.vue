<template>
  <UsersProfile
    :verticalCards="verticalCards"
    :horizontalCard="horizontalCard"
  />
</template>

<script lang="ts">
import UsersProfile from "../../templates/Users/Profile.vue";
import { mdiDatabaseCog, mdiSecurity, mdiWallet, mdiCog } from "@mdi/js";

export default {
  name: "ProfileContainer",
  components: {
    UsersProfile,
  },
  data() {
    return {
      verticalCards: [
        {
          title: "Personal data",
          icon: mdiDatabaseCog,
          data: [
            {
              title: "ID",
              buttonText: "Change ID",
            },
          ],
        },
        {
          title: "Security",
          icon: mdiSecurity,
          data: [
            {
              title: "Password",
              buttonText: "Change Password",
            },
          ],
        },
        {
          title: "Billing",
          icon: mdiWallet,
          data: [
            {
              title: "Subscription type",
              buttonText: "Change Plan",
            },
          ],
        },
      ],
      horizontalCard: {
        title: "My settings",
        icon: mdiCog,
      },
    };
  },
};
</script>
