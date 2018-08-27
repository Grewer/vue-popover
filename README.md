## vue-popover

> This project was redeveloped on the basis of vue-js-popover, making him more automated and intelligent.

[Original project link](https://github.com/euvl/vue-js-popover)



**demo: [click Me](https://grewer.github.io/vue-popover/demo/dist/)**

### Download

```bash
npm i -S vue-grewer-popover
```

main.js
```js
import VuePopover from 'vue-grewer-popover'

Vue.use(VuePopover)
```


### Basic Usage


```
<span v-popover="'clickMe'">click me!</span>

<Popover name="clickMe">
    <div>show after click</div>
</Popover>
```

#### hover trigger:

```
<span v-popover.hover="{name:'foo3'}">bottom</span>
// or  <span v-popover="{name:'foo3',trigger:'hover'}">bottom</span>

<Popover name="foo3">
    <div>show on bottom</div>
</Popover>
```

#### direction

```
<span v-popover.hover="{name:'foo',position:'top'}">top</span>
<span v-popover="{name:'foo2',trigger:'hover',position:'bottom'}">bottom</span>
<span v-popover.hover="{name:'foo3',position:'left'}">left</span>
<span v-popover.hover="{name:'foo4',position:'right'}">right</span>


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
```

#### animation
```
<span v-popover="'animation'">click me to show animation</span>
 
<transition name="pop-out">
    <Popover name="animation">
        <div>show animation</div>
    </Popover>
</transition>
```
css:
```css
    .pop-out-enter-active, .pop-out-leave-active {
        transition: transform 1s, opacity 0.7s;
    }

    .pop-out-enter, .pop-out-leave-to {
        opacity: 0;
        transform: translate(0, 20px);
    }
```

#### dynamic popover
```
<span v-popover="dynamicName">dynamic name popover</span>
<button @click="handleToggle"> change bind name</button>

<Popover name="bar" autoFix>
    <div>this is dynamic bar ~~~~~~~</div>
</Popover>
<Popover name="bar2" autoFix>
    <div>this is dynamic bar2~~~~~~~</div>
</Popover>
```
```js
data() {
  return {
    dynamicName: 'bar'
  }
},
methods: {
  handleToggle() {
    this.dynamicName = this.dynamicName === 'bar2' ? 'bar' : 'bar2'
  }
},
```


### Popover params:

|param | explanation | default | type
|--- |:------| --- | ---
|name | a required parameter to connect the trigger and popover | '' | String 
|width| popover width | auto | String or Number
|pointer | whether to display the arrow | true | Boolean
|delay | delayed appearance of popover | 0ms | Number
|autoFix | position and arrow are automatically adjusted when the Popover is near the edge | false | Boolean



