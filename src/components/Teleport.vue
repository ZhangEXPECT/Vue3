<template>
    <div>
        <button @click="isActive = true">打开</button>
        <!-- Teleport 组件将元素传送到指定标签下，比如body-->
        <!-- 在多级组件嵌套的环境下可以更方便调整元素的位置 -->
        <!-- 调整到父元素body内 -->
        <teleport to='body'>
            <div class="mask" v-if="isActive">
                <div class="dialog">
                    <h2>欢迎！！</h2>
                    <p>你好蒙奇|D|黄猿</p>
                    <button @click="isActive = flase">关闭</button>
                </div>
            </div>
        </teleport>

    </div>
</template>

<script>
import { ref } from 'vue';




export default {
    name: 'DiaLog',
    setup() {
        let isActive = ref(false);
        return { isActive }
    }
}
</script>

<style lang="scss" scoped>
.mask {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5)
}

.dialog {
    width: 300px;
    height: 300px;
    position: relative;
    background-color: aquamarine;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>