<template>
        <div>
                <q-form>
                        <q-input
                          outlined
                          v-model="formData.name"
                          label="Name" />
                          <br>
                        <q-input
                          outlined
                          type="email"
                          v-model="formData.email"
                          label="Email" />
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
                                        password: ' '
                                }
                        }
                }
        }
</script>

<style lang="scss" scoped>

</style>