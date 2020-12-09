<template>
        <div>
                <q-form>
                        <q-input
                          outlined
                          class="q-mb-md"
                          v-model="formData.name"
                          label="Name" />
                        <q-input
                          outlined
                          class="q-mb-md"
                          type="email"
                          v-model="formData.email"
                          label="Email" />
                        <q-input
                          outlined
                          class="q-mb-md"
                          type="password"
                          v-model="formData.password"
                          label="Password" />
                </q-form>
        </div>
</template>

<script>
        export default {
                props: ['tab'],
                data(){
                        return{
                                formData: {
                                        name: ' ',
                                        email: ' ',
                                        password: ' ',
                                }
                        }
                }
        }
</script>

<style lang="scss" scoped>

</style>