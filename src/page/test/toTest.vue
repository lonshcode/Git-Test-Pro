<template>
  <div>
    <button @click="toTest">点击跳转到test</button>
  </div>
</template>

<script>
export default {
  name: 'toTest',
  // components: {
  //   HelloWorld
  // }
  methods: {
    toTest() {
      this.$router.push("/test")
    }
  },
  mounted () {
    console.log("mounted");
  }
}
</script>

<style>
</style>
