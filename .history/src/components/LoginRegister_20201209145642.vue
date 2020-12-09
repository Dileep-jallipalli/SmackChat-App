<template>
        <div>
                <q-form>
                        <q-input
                          outlined
                          v-model="text"
                          label="Name" />
                </q-form>
        </div>
</template>

<script>
        export default {
                props: ['tab'],
                data(){
                        return{
                                formData(){
                                        
                                }
                        }
                }
        }
</script>

<style lang="scss" scoped>

</style>