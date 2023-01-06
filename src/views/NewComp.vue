<template>

    <!-- Fragment 组件将所有元素包裹，默认的根标签 -->
    <!-- Teleport 组件将元素传送到指定标签下，比如body-->
    <!-- <Teleport></Teleport> -->

    <Suspanse>
        <template v-slot:default>
            <DiaLog/>
        </template>
        <template v-slot:fallback>
            <h2>Loding....</h2>
        </template>
    </Suspanse>
    <!-- 使用suspanse 子组件setup|() 可以返回promise 可以用async await -->

    <div class="box" v-for="(item, index) in tempList.slice(0, 2)" :key="index"></div>

    <!-- Suspanse 组件-->
</template>

<script>
import { reactive, defineAsyncComponent } from 'vue';
// import DiaLog from '@/components/Teleport.vue';
// Suspanse 解决动态引入(异步引入)产生的抖动问题
const DiaLog = defineAsyncComponent(() => import('@/components/Teleport.vue'));
export default {
    components: {
        DiaLog

    },
    setup() {
        const tempList = reactive([
            {
                name: '张三',
                age: 18
            }, {
                name: '李四',
                age: 19
            }, {
                name: '王五',
                age: 20
            },
        ]);


        return { tempList }
    }
}
</script>

<style lang="scss" scoped>
.box {
    background-color: aquamarine;
    height: 100px;
    width: 100px;
    border: 1px solid lightcoral;
}
</style>