<template>
  <div class="parent">
    <h3>问卷调查</h3>
    <child :formData.sync="form"></child>
    <div>
      <p>姓名：{{form.name}}</p>
      <p>年龄：{{form.age}}</p>
      <p>地址：{{form.address}}</p>
      </div>
  </div>
</template>
<script>
  import child from "../components/dialog.vue";//导入子组件
  export default{
    components:{
      child
    },
    data:function () {
      return {
        form:{
          name:"",
          namePla:"姓名不能为空",
          address:"",
          age:""
        }
      }
    }
  }
</script>
