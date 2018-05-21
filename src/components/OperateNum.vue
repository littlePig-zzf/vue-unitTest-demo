<template>
  <div>
    <span class="init">初始值为{{ InitNum }}</span><br>
    <span class="click">点击了{{ ClickNum }}次</span><br>
    <span class="result">最终结果为{{ ResultNum }}</span><br>
    <button @click="add">累加{{ AddNum }}</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Click',
  props: {
    AddNum: {
      type: Number,
      default: 1
    },
    InitNum: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      ClickNum: 0,
      ResultNum: 0
    }
  },
  mounted () {
    this.ResultNum = this.InitNum
  },
  methods: {
    add () {
      this.ResultNum += this.AddNum
      this.ClickNum++
      this.$emit('result', {
        ClickNum: this.ClickNum,
        ResultNum: this.ResultNum
      })
    }
  }
}
</script>
