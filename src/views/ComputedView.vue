<template>
    <div>
        <ComputedDemonVue></ComputedDemonVue>
    </div>
    <button @click="sum++">加</button><h2>{{sum}}</h2>
    <button @click="msg+='!'">加</button><h2>{{msg}}</h2>
    <button @click="person.age+=1">年纪加</button><h2>{{person.age}}</h2>
</template>

<script>
import ComputedDemonVue from '@/components/ComputedDemon.vue';
import {ref,watch,reactive,watchEffect} from 'vue';
export default {

components: {
    ComputedDemonVue
  },
    setup () {
        let sum = ref(0);
        let msg = ref('Fuck');
        let person = reactive({
            name:'luqi',
            age:18
        });


        // 监视ref定义的多个属性
        watch([sum,msg],(newValue,oldValue)=>{
            console.log('改变',newValue,oldValue);
        },{immediate:true});

        // 监视ref定义的对象
        // watch(person.value)或者开启深度监视

        

        // 监视reactive定义的响应式数据无法正确获取oldValue
        // 强制开启了deep:true
        watch(person,(newValue,oldValue)=>{
            console.log("changeAll",newValue,oldValue);
        })
        
        // 监视对象的某一个属性
        watch(()=>person.age,(newValue,oldValue)=>{
            console.log("changeSigle",newValue,oldValue);
        })

         // 监视对象的某一些属性
         watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            console.log("changeSome",newValue,oldValue);
         })

        //  监视对象里的对象，需要开启深度监视



        // vue3 提供的watchEffect  自动监视属性
        watchEffect(()=>{
            // 自动检测
            const x = sum.value
            const temp= person.age;
            console.log('提示自动开启immediate',x,temp);
        })

         



        return {
            sum,msg,person
        }
    }
}

</script>

<style lang="scss" scoped>

</style>