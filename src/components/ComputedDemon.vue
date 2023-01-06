<template>
    <div>
        <input type="text" v-model="person.firstName">
        <input type="text" v-model="person.lastName">
       <textarea type="text"  v-model="person.fullName"></textarea>

    </div>
</template>

<script>
import { reactive,computed } from 'vue';

export default {
    name: "ComputedDemon",
    // vue2写法
    // computed: {
    //     getFullName() {
    //         return this.person.firstName + this.person.lastName;
    //     }
    // },
    setup() {
        let person = reactive({
            firstName: "蒙奇D|",
            lastName: "黄猿"
        });
        person.fullName = computed({
            get() {
                return person.firstName + person.lastName;
            },
            set(value) {
                let nameArr = value.split("|");
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            },
        });
        return {
            person
        };
    },
}
</script>

<style lang="scss" scoped>

</style>