<template>
        <q-page class="flex q-pa-md">
                <q-card>
                        <q-tabs
                        v-model="tab"
                        dense
                        class="text-grey"
                        active-color="primary"
                        indicator-color="primary"
                        align="justify"
                        narrow-indicator
                        >
                        <q-tab name="login" label="Login" />
                        <q-tab name="register" label="Register" />
                        </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="mails">
                        <div class="text-h6">Mails</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>

                        <q-tab-panel name="alarms">
                        <div class="text-h6">Alarms</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>
                        </q-tab-panels>
                </q-card>

        </q-page>
</template>

<script>
        export default {
                data () {
                        return {
                                tab: 'mails'
                }
        }
}
</script>

<style scoped></style>
