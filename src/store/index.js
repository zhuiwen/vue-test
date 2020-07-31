import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 2,
        goods: [{
            
        }]
    },
    mutations: {
        addCount(state, p){
            state.count += p;
        }
    }
})