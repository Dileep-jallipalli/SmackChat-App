<template>
  <q-page class="flex column">
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from "
        :text="[message.text]"
        :sent="message.from ==  'me'  ?  true :  false"/>
    </div>
    <q-footer elevated>
      <q-toolbar>
              <q-form>
                <q-input
                        v-model="newMessage"
                        bg-color="white"
                        label="Message"
                        :class="full-width"
                        outlined
                        rounded
                        dense
                >
                        <template v-slot:after>
                                <q-btn round dense flat color="white" icon="send" />
                        </template>
                </q-input>
                </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: " ",
      messages: [
        {
          text: "Hey Jim Hi",
          from: "me",
        },
        {
          text: "hi Thanks",
          from: "them",
        },
        {
          text: "good",
          from: "me",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
