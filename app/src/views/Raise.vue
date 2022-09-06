<template xmlns="http://www.w3.org/1999/html">
    <div id="app" class="about">
      <button @click="count++">Count is: {{ count }} {{name}}</button>

      姓名 <input name="name">
      疾病 <input name="sickName">
      筹款金额 <input name="amount">
    </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      name: "abc"
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
