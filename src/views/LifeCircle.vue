<template>
    <div>
        <h1>生命周期的各种配置项可通过组合式API来写</h1>
    </div>
    <hr>
    <h2>X-{{point.x}}   Y-{{point.y}}</h2>
</template>

<script>
import {reactive, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';
export default {
    setup () {//相当于beforeCreated的组合式API
        let point = reactive({
            x:0,
            y:0
        })
        function savePoint(e){
            point.x = e.pageX;
                point.y = e.pageY;
                console.log('我点击了这里',point.x,point.y);
        }

        onBeforeMount(() => {
            console.log("-onBeforeMount-");
        })


        onMounted(() => {
            // 给窗口添加点击事件
            window.addEventListener('click',savePoint);
            console.log("-onMounted-");
        })


        onBeforeUpdate(() => {
            console.log("-onBeforeUpdate-");
        })


        onUpdated(() => {
            console.log("-onUpdated-");
        })


        onBeforeUnmount(() => {
            // 移除事件监听
            window.removeEventListener('click',savePoint);
            console.log("-onBeforeUnmount-");
        });


        onUnmounted(() => {
            console.log("-onUnmounted-");
        });
        

        // 自定义hook函数




        return {point}
    }

}
</script>

<style lang="scss" scoped>

</style>