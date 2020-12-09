<template>
        <div>
                <q-form @click="submitForm">
                        <q-input
                          v-if="tab == 'register'"
                          outlined
                          class="q-mb-md"
                          v-model="formData.name"
                          label="Name" />
                        <q-input
                          outlined
                          class="q-mb-md"
                          type="email"
                          v-model="formData.email"
                          label="Email"  />
                        <q-input
                          outlined
                          class="q-mb-md"
                          type="password"
                          v-model="formData.password"
                          label="Password"  />
                          <div class="row">
                                 <q-space/>
                                <q-btn
                                  color="primary"
                                  type:="submit"
                                  :label="tab" />
                          </div>
                </q-form>
        </div>
</template>

<script>
import {mapActions} from 'vuex'
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
                },
                methods: {
                        ...mapActions('store', ['registerUser']),
                        submitForm() {
                                if(this.tab == 'login'){
                                        console.log("login");
                                }
                                else{
                                        this.
                                }
                        }
                }
        }
</script>

<style lang="scss" scoped>

</style>