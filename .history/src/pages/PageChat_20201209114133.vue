<template>
  <q-page class="flex">
    <h5>Chat Page</h5>
    <q-footer elevated>
      <q-toolbar>
        <q-input
          bg-color="white" 
          class="full-width"
          outlined
          rounded
          v-model="text"
          label="Label"
          dense>
        <template v-slot:after>
          <q-btn
            round
            dense
            
           
            icon="send" />
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
