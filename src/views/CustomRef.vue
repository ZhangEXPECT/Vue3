<template>
    <div>
        <input type="text" v-model='keyWord'>
        <p>{{ keyWord }}</p>
    </div>
</template>

<script>
import { customRef } from 'vue';
export default {
    setup() {


        // 自定义ref
        function myRef(value,delay) {
            let timer
            return customRef((track, trigger) => {
                return {
                    get() {
                        track(); //通知vue追踪value的变化，
                        return value;
                    },
                    set(newValue) {
                        console.log('修改');
                        clearTimeout(timer); 
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger() //通知重新解析模板   
                        }, delay);
                    }
                }
            })
        }

        let keyWord = myRef('hello',600);

        return { keyWord, myRef }
    }
}
</script>

<style lang="scss" scoped>

</style>