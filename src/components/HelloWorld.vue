<template>

  <h1>{{ msg }}</h1>
  <button @click="test">测试事件</button>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['helloE'],
  // 接受两个参数
  setup(props, context) {
    console.log(props);
    console.log(context);

    function test() {
      context.emit('hello', 666);

    }
    return test
  },
}
</script>

<style scoped lang="scss">

</style>
