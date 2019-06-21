<!-- 父组件 parent.vue -->
<template>
    <div class="parent">
        <h3>问卷调查</h3>
        <child></child>
        <div class="">
            <br><br>
            <p>数据：{{_fatherData}}</p>
        </div>
    </div>
</template>
<script>
import child from "../components/dialogVuex.vue"
export default {
    components:{
        child
    },
    data:function(){
        return {
            form:{
                name:"",
                namePla:"",
                address:"",
                age:""
            }
        };
    },
    computed:{//挂载完成后
        _fatherData(){//获取全局store仓库中的formData值
            //读取store里面的值，这里是重点
            return this.$store.state.dialog.formDatas;
        }
    }
};
</script>

