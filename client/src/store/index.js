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
        getYear(state, payload) {
            state.step1[ 0 ].year = payload.substr( 0, 4 )
        },
        getMonth(state, payload) {
            state.step1[ 0 ].month = payload
        },
        getDay(state, payload) {
            state.step1[ 0 ].day = payload
        },
        getGender(state, payload) {
            if (payload === 'man') {
                state.step1[ 0 ].gender = '男'
            } else {
                state.step1[ 0 ].gender = '女'
            }
        },
        selectAns1(state, payload) {
            if (payload === 'yes'){
                state.step2[ 0 ].question1 = 'はい'
            } else {
                state.step2[ 0 ].question1 = 'いいえ'
            }
        },
        selectAns2(state, payload) {
            if (payload === 'yes'){
                state.step2[ 0 ].question2 = 'はい'
            } else {
                state.step2[ 0 ].question2 = 'いいえ'
            }
        },
        selectAns3(state, payload) {
            if (payload === 'yes'){
                state.step2[ 0 ].question3 = 'はい'
            } else {
                state.step2[ 0 ].question3 = 'いいえ'
            }
        },
        sendMsg(state, payload) {
            state.step3[ 0 ].message = payload
        }
    },
    actions: {
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
