import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import dialog_store from './components/dialog_store.js';//引入某个store对象
export default new Vuex.Store({
  modules: {
    dialog: dialog_store
  }
});

