<template>
    <div>
        <div class="box">
            <h3>position</h3>
            <span v-popover.hover="{name:'foo',position:'top'}">top</span>
            <span v-popover="{name:'foo2',trigger:'hover',position:'bottom'}">bottom</span>
            <span v-popover.hover="{name:'foo3',position:'left'}">left</span>
            <span v-popover.hover="{name:'foo4',position:'right'}">right</span>
        </div>
        <div class="box">
            <h3>trigger</h3>
            <span v-popover="'clickMe'">click me!</span>
        </div>
        <div class="box">
            <h3>animation</h3>
            <span v-popover="'animation'">click me to show animation</span>
        </div>

        <div class="box">
            <h3>your className</h3>
            <span v-popover="'className'">add your className</span>
        </div>

        <div class="box">
            <h3>autoFix (default Close)</h3>
            <span style="position:relative;left:-90px;" v-popover="'autoFix1'">fixLeft click me</span>
            <span style="position:relative;right: -81%;" v-popover="'autoFix2'">fixRight click me</span>
        </div>

        <div class="box">
            <h3>dynamic</h3>
            <span v-popover="dynamicName">dynamic name popover</span>
            <button @click="handleToggle"> change bind name</button>
        </div>


        <Popover name="foo">
            <div>show on top</div>
        </Popover>

        <Popover name="foo2">
            <div>show on bottom</div>
        </Popover>

        <Popover name="foo3">
            <div>show on left</div>
        </Popover>

        <Popover name="foo4">
            <div>show on right</div>
        </Popover>

        <Popover name="clickMe">
            <div>show after click</div>
        </Popover>

        <transition name="pop-out">
            <Popover name="animation">
                <div>show animation</div>
            </Popover>
        </transition>

        <Popover name="className" class="myClass">
            <div>font color change</div>
        </Popover>

        <Popover name="autoFix1" :auto-fix="true">
            <div>autoFix1 ~~~~~~~</div>
        </Popover>
        <Popover name="autoFix2" width="200" autoFix>
            <div>autoFix1 ~~~~~~~</div>
        </Popover>

        <Popover name="bar" autoFix>
            <div>this is dynamic bar ~~~~~~~</div>
        </Popover>
        <Popover name="bar2" autoFix>
            <div>this is dynamic bar2~~~~~~~</div>
        </Popover>

    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: 'foo3',
        dynamicName: 'bar'
      }
    },
    methods: {
      handleToggle() {
        this.dynamicName = this.dynamicName === 'bar2' ? 'bar' : 'bar2'
      }
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
        margin: 40px 60px;
    }

    .box > span {
        margin: 0 30px;
    }

    .pop-out-enter-active, .pop-out-leave-active {
        transition: transform 1s, opacity 0.7s;
    }

    .pop-out-enter, .pop-out-leave-to {
        opacity: 0;
        transform: translate(0, 20px);
    }

    .myClass {
        color: #31700e;
    }
</style>
