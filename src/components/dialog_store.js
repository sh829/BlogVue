export default {
    state: {
     formDatas: null
   },
   // 改变state里面的值得方法
   mutations: {
     getFormData(state, data) {
       state.formDatas = data;
     }
   }
 }