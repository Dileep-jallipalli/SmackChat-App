<template>
  <q-page class="flex">
    <h5>Chat Page</h5>
    <q-footer elevated>
      <q-toolbar>
        <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped></style>
