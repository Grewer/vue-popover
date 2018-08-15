<template>
    <div class="hello">
        <h1 v-popover=name>动态名称 test </h1>
        <button @click="handleToggle">toggle</button>

        <h1 v-popover="{name:'foo2',trigger:'hover'}">obj 中的触发方式</h1>

        <h1 v-popover.hover="{name:'foo3'}">修饰符中的触发方式</h1>
        <h3>Installed CLI Plugins</h3>
        <p> 下方是 popover 测试</p>
        <Popover name="foo"></Popover>
        <Popover name="foo2" ></Popover>
        <Popover name="foo3" ></Popover>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: 'foo'
      }
    },
    methods: {
      handleToggle() {
        this.name = 'bar'
      }
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
