<template>
        <q-layout view="lHh Lpr lFf">
        <q-header elevated>
        <q-toolbar>
                <q-btn
                v-if="$route.fullPath.includes('/chat')"
                v-go-back.single
                icon="arrow_back"
                flat
                dense
                label="Back" />
                <q-toolbar-title class="absolute-center"> {{ title }}</q-toolbar-title>
                <q-btn
                v-if="!userDetails.userId"
                to="/auth"
                class="absolute-right q-pr-sm"
                icon="account_circle"
                no-caps
                flat
                dense
                label="Login" />
               <q-btn
                v-else
                class="absolute-right q-pr-sm"
                icon="account_circle"
                no-caps
                flat
                dense
                label="Logout" /> 
        </q-toolbar>
        </q-header>

        <q-page-container>
        <router-view />
        </q-page-container>
        </q-layout>
</template>

<script>
import { mapState }  from 'vuex'
export default {
  computed: {
        ...mapState('store', ['userDetails']),
        title() {
                console.log(this.$route);
                let currentPath = this.$route.fullPath;
                if (currentPath == "/") return "SmackChat";
                else if (currentPath == "/chat") return "Chat";
                else if (currentPath == "/auth") return "Auth ";
    },
  },
};
</script>
