<script>
  import {events} from './bus'
  const pointerSize = 6
  export default {
    name: "popover",
    methods: {
      showEventListener(event) {
        console.log('show trigger')
        if (this.visible) {
          events.$emit(this.hideEventName)
          return
        }

        this.$nextTick(() => {
          let { target, name, position } = event
            // let direction = directions[position]
            // this.positionClass = `dropdown-position-${position}`
            this.visible = true
            // this.$nextTick(() => {
            //   this.$emit('show', event)
            //
            //   this.$nextTick(()=>{
            //     let position = this
            //       .getDropdownPosition(target, this.$refs.dropdown, direction)
            //
            //     this.position = {
            //       left: `${position.left}px`,
            //       top: `${position.top}px`
            //     }
            //   })
            // })

        })
      },
      hideEventListener(event) {
        console.log('hide trigger')
        if (this.visible) {
          this.visible = false
          this.$emit('hide', event)
        }
      }
    },
    data() {
      return {
        visible: false,
        position: {
          left: 0,
          top: 0
        }
      }
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mounted() {
      events.$on(this.showEventName, this.showEventListener)
      events.$on(this.hideEventName, this.hideEventListener)
    },
    beforeDestroy() {
      events.$off(this.showEventName, this.showEventListener)
      events.$off(this.hideEventName, this.hideEventListener)
    },
    computed: {
      showEventName() {
        return `${this.name}:show`
      },
      hideEventName() {
        return `${this.name}:hide`
      },
      className () {
        return [
          'vue-popover',
          this.pointer && this.positionClass
        ]
      },
      style () {
        return {
          width: `${this.width}px`,
          ...this.position
        }
      }
    },
    render(h) {
      if (!this.visible) {
        return null
      }
      return h('div', {
          class: this.className,
          style: this.style,
          on: {
            click(event) {
              event.stopPropagation()
            }
          },
          ref: 'dropdown'
        },
        this.$slots.default
      )
    }
  }
</script>

<style scoped lang="less">
    .vue-popover{
        width: 100px;
    }
</style>