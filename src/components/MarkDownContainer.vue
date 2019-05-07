<template>
  <div class="hello">
    <h3>MarkDown 容器</h3>
    <b>当前pageType是</b>：{{pageType}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageType: ""
      }
    },
    mounted () {
      this.pageType = this.$route.query.pageType
    }
  }
</script>

<style scoped>

</style>
