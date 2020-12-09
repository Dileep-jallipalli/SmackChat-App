import { firebaseAuth, firebaseDb} from 'boot/firebase'
const state = {

}
const mutations = {

}
const actions = {
        registerUser({}, payload) {
                firebaseAuth.createUserWithEmailAndPassword(email, password)
        }
}
const getters = {

}

export default {
        namespaced: true,
        state,
        mutations,
        actions,
        getters
}