import { firebaseAuth, firebaseDb} from 'boot/firebase'
const state = {
        userDetails: {}
}
const mutations = {
        setUserDetails(state, payload){
                state.userDetails = payload
        }
}
const actions = {
        registerUser({}, payload) {
                firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                        console.log(response)
                        let userId = firebaseAuth.currentUser.uid;
                        firebaseDb.ref('users/' + userId).set({
                                name: payload.name,
                                email: payload.email, 
                                online: true
                        })
                })
                .catch(error => {
                        console.log(error.message)
                })
        },
        loginUser({}, payload){
                firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                        console.log(response);
                })
                .catch(error => {
                        console.log(error.message)
                })
        },
        logoutUser() {
                firebaseAuth.signOut ( ) 
        },
        handleAuthStateChanged({ commit , dispatch }) {
                firebaseAuth.onAuthStateChanged(user => {
                        if (user) {
                          // User is signed in.
                                let userId = firebaseAuth.currentUser.uid
                                firebaseDb.ref('users/' + userId).once('value', snapshot => {
                                        let userDetails = snapshot.val()
                                        commit('setUserDetails', { 
                                                name: userDetails.name,
                                                email: userDetails.email, 
                                                userId: userId
                                        })
                                })
                                dispatch('firebaseUpdateUser',{
                                   userId: userId,
                                   updates:{
                                        online: true
                                   }
                                })
                                this.$router.push('/')
                        }
                        else{
                                //user is logged out
                                commit('setUserDetails', {})
                                dispatch('firebaseUpdateUser',{
                                 userId: userId,
                                 updates:{
                                      online: false
                                 }
                              })
                                this.$router.replace('/auth')
                        }
                      });
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