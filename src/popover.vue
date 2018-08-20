<script>
  import {events} from './bus'

  const pointerSize = 6
  const directions = {
    left: [-1, 0],
    right: [1, 0],
    top: [0, 1],
    bottom: [0, -1]
  }
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
          this.theEvent = event
          let {target, name, position} = event
          if (name === this.name) {
            this.delayFunc = setTimeout(() => {
              let direction = directions[position]
              this.positionClass = `dropdown-position-${position}`
              this.visible = true
              this.$nextTick(() => {
                this.$emit('show', event)
                this.$nextTick(() => {
                  let position = this
                    .getDropdownPosition(target, this.$refs.dropdown, direction)
                  this.position = {
                    left: `${position.left}px`,
                    top: `${position.top}px`
                  }
                })
              })
            }, this.delay)
          }
        })
      },
      hideEventListener(event) {
        if (this.delayFunc) {
          clearTimeout(this.delayFunc)
          this.delayFunc = null
        }
        if (this.visible) {
          this.visible = false
          this.$emit('hide', event)
        }
      },
      cleanLayout() {
        let {target, position} = this.theEvent
        let direction = directions[position]
        this.$nextTick(() => {
          let position = this
            .getDropdownPosition(target, this.$refs.dropdown, direction)
          this.position = {
            left: `${position.left}px`,
            top: `${position.top}px`
          }
        })
      },
      getDropdownPosition(target, dropdown, direction) {
        let trRect = target.getBoundingClientRect()
        let ddRect = dropdown.getBoundingClientRect()
        // Position within the parent
        let offsetLeft = trRect.left
        let offsetTop = trRect.top
        // let shiftX = ddRect.width - trRect.width
        let shiftY = 0.5 * (ddRect.height + trRect.height)
        // Center of the target element
        let centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width)
        let centerY = offsetTop + trRect.height - shiftY
        // let anchorX = direction[0] * this.anchor
        // let anchorY = direction[0] * this.anchor
        // Position of the dropdown relatively to target
        let x = direction[0] * 0.5 * (ddRect.width + trRect.width)
        let y = direction[1] * shiftY
        // Pointer size correction
        if (this.pointer) {
          x += direction[0] * pointerSize
          y += direction[1] * pointerSize
        }
        const scrollLeft = this.getScrollLeft()
        return {
          left: centerX + x + scrollLeft,
          top: centerY - y
        }
      },
      getScrollLeft() {
        let obj = ((obj = document.documentElement) || (obj = document.body.parentNode)) && typeof obj.scrollLeft === 'number' ? obj : document.body
        this.getScrollLeft = () => obj.scrollLeft
        return obj.scrollLeft
      }
    },
    data() {
      return {
        visible: false,
        positionClass: '',
        position: {
          left: 0,
          top: 0
        },
        delayFunc: null,
        theEvent: null
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      pointer: {
        type: Boolean,
        default: true
      },
      anchor: {
        type: Number,
        default: 0.5,
        validator: (v) => v >= 0 && v <= 1
      },
      delay: {
        type: Number,
        default: 0
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
      className() {
        return [
          'vue-popover',
          this.pointer && this.positionClass
        ]
      },
      style() {
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
    @pointer-size: 6px;
    .vue-popover {
        display: block;
        position: absolute;
        background: #fff;
        box-shadow: 0px 4px 20px 0px rgba(52, 73, 94, 0.2);
        padding: 5px;
        border-radius: 5px;
        z-index: 998;
        &:before {
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            content: "";
        }
        &.dropdown-position-bottom {
            &:before {
                border-left: @pointer-size solid transparent;
                border-right: @pointer-size solid transparent;
                border-bottom: @pointer-size solid #fff;
                top: -6px;
                left: calc(50% - 6px);
                filter: drop-shadow(0px -2px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-top {
            &:before {
                border-left: @pointer-size solid transparent;
                border-right: @pointer-size solid transparent;
                border-top: @pointer-size solid #fff;
                bottom: -6px;
                left: calc(50% - 6px);
                filter: drop-shadow(0px 2px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-left {
            &:before {
                border-top: @pointer-size solid transparent;
                border-bottom: @pointer-size solid transparent;
                border-left: @pointer-size solid #fff;
                right: -6px;
                top: calc(50% - 6px);
                filter: drop-shadow(2px 0px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-right {
            &:before {
                border-top: @pointer-size solid transparent;
                border-bottom: @pointer-size solid transparent;
                border-right: @pointer-size solid #fff;
                left: -6px;
                top: calc(50% - 6px);
                filter: drop-shadow(-2px 0px 2px rgba(52, 73, 94, 0.1));
            }
        }
    }

</style>