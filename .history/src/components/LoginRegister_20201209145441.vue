<template>
        <div>
                <q-form>
                        <q-input
                          outlined
                          v-model="text"
                          label="name" />
                </q-form>
        </div>
</template>

<script>
        export default {
                props: ['tab']
        }
</script>

<style lang="scss" scoped>

</style>