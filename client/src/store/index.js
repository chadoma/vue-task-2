import Vue from "vue";
import Vuex from "vuex";

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        step1: [
            {
                gender: '',
                year: '',
                month: '',
                day: ''
            }
        ],
        step2: [
            {
                question1: '',
                question2: '',
                question3: '',
            },
        ],
        step3: [
            {
                message: ''
            }
        ]
    },
    mutations: {
        curAns(state, val) {
            state.ans1 = val
        },
        getYear(state, payload) {
            state.step1[ 0 ].year = payload
        },
        getMonth(state, payload) {
            state.step1[ 0 ].month = payload
        },
        getDay(state, payload) {
            state.step1[ 0 ].day = payload
        },
        getGender(state, payload) {
            state.step1[ 0 ].gender = payload
        },
        selectAns1(state, payload) {
            state.step2[ 0 ].question1 = payload
        },
        selectAns2(state, payload) {
            state.step2[ 0 ].question2 = payload

        },
        selectAns3(state, payload) {
            state.step2[ 0 ].question3 = payload
        },
        sendMsg(state, payload) {
            state.step3[ 0 ].message = payload
        }
    },
    actions: {
        curAns({ commit }, ans1, val) {
            commit( 'curAns', ans1, val )
            console.log( ans1, val )
            console.log( commit )
        },
        getYear({ commit }, payload) {
            commit( 'getYear', payload )
        },
        getMonth({ commit }, payload) {
            commit( 'getMonth', payload )
        },
        getDay({ commit }, payload) {
            commit( 'getDay', payload )
        },
        getGender({ commit }, payload) {
            commit( 'getGender', payload )
        },
        selectAns1({ commit }, payload) {
            commit( 'selectAns1', payload )
        },
        selectAns2({ commit }, payload) {
            commit( 'selectAns2', payload )
            console.log( payload )
        },
        selectAns3({ commit }, payload) {
            commit( 'selectAns3', payload )
        },
        sendMsg({ commit }, payload) {
            commit( 'sendMsg', payload )
        }

    },
    modules: {}
} );
