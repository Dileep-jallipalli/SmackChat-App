<template>
  <q-page class="flex">
    <h5>Chat Page</h5>
    <q-footer elevated>
      <q-toolbar>
        <q-input
         v-model="newMessage"
          bg-color="white" 
          class="full-width"
          outlined
          rounded
          label="message"
          dense>
        <template v-slot:after>
          <q-btn
            round
            dense
            flat
            color="white"
            icon="send" />
        </template>
      </q-input>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
        data(){
                return{
                        newMessage: ' '
                }
        }
};
</script>

<style scoped></style>
