<template>
    <div>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <button @click="age+=1">年纪</button>
    </div>
</template>

<script>
import { reactive,toRef,toRefs,readonly} from 'vue';
export default {
    setup () {
        let person = reactive({
            name:'www',
            age:2
        });
        
        const p  =toRefs(person);

        person= readonly(person);

        return {
            // 将常用的数据拆分出来
            name:toRef(person,'name'),
            age:toRef(person,'age'),
            ...p

        }


        //其他的组合式API
        // shallowRef
        // shallowReactive

        // readonly 深只读
        // shallowReadonly 浅只读

        // toRaw 将响应式对象转成普通对象
        // markRow  标记之后不会成为响应式对象
    }
}
</script>

<style lang="scss" scoped>

</style>