<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <q-item v-for="user in users" :key="user.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="blue"> #4D96F2 </q-badge>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
  </q-page>
</template>

<script>
const users = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
  },
  {
    id: 4,
    name: "Seka Fawdrey",
  },
];

export default {
  data() {
    return {
      users,
    };
  },
};
</script>

<style scoped></style>
