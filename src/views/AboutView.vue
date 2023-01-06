<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 不需要.value ，vue3自动识别ref的引用实例-->
    <h2>{{ name }}</h2>
    <p>{{ job.salary }}</p>
    <p>{{ job.type }}</p>
    <button @click="changeSalary">修改薪水</button>
  </div>
</template>
<script>
import { ref, reactive } from "vue"

export default {
  setup() {
    // 用ref函数包裹返回一个引用实例对象
    let name = ref('hehe');
    let age = ref('12');
    // ref 对于基本数据类型采用的仍然是defineProperty，getter数据劫持
    // 引用数据类型使用proxy
    let job = ref({
      salary: '30k',
      type: 'top'
    });

    // reactive函数包裹引用数据类型返回一个proxy对象
    let mom = reactive({
      salary: '30k',
      type: 'top'
    })
    // 通过数组索引可以直接修改数据

    function sayHello() {
      // alert(`我是${name}${age}`);
    }

    function changeSalary() {
      console.log(job);
      console.log(mom);
      job.value.salary = '60k';
      job.value.type = 'hehe';
    }

    return {
      name, age, job, sayHello, changeSalary, mom
    }
  }
}
</script>

