// 对组合式API的封装
import {reactive, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';

export default function(){
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
    

}