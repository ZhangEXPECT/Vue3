<template>
    <div>

    </div>
</template>

<script>
import {provide} from 'vue'  //跨级组件通讯
export default {
    setup () {
        let car = provide({
            name:'ss',
            cost:100
        })

        // 子组件通过inject接受
        // let car = inject('car')
        return {car}
    }
}
</script>

<style lang="scss" scoped>

</style>