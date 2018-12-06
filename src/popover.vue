<script>
  import {events} from './bus'

  const pointerSize = 6
  const directions = {
    left: [-1, 0],
    right: [1, 0],
    top: [0, -1],
    bottom: [0, 1]
  }
  export default {
    name: "popover",
    methods: {
      showEventListener(event) {
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
              this.visible = true
              this.$nextTick(() => {
                this.$emit('show', event)
                this.$nextTick(() => {
                  let position = this.getDropdownPosition(target, this.$refs.dropdown, direction)
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
        let trRect = target.getBoundingClientRect() // 触发器的坐标(距离浏览器显示界面的长度)
        if (!dropdown) {
          return;
        }
        let ddRect = dropdown.getBoundingClientRect()// popover 的坐标(距离浏览器显示界面的长度)

        let offsetLeft = trRect.left
        let offsetTop = trRect.top
        // 触发器距离左上的长度

        let shiftY = 0.5 * (ddRect.height + trRect.height)
        // 触发器和 popover 的平均高度



        let centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width)
        let centerY = offsetTop + trRect.height - shiftY
        // 触发器的 left 坐标    y不一定是触发器中心点


        this.arrowPosition = 50

        if (this.autoFix) {
          const {position} = this.theEvent
          if (position === 'bottom' || position === 'top') {
            const ddWidth = ddRect.width
            if (centerX < 0) {
              this.arrowPosition = (50 + Number(centerX / (ddWidth) * 100)).toFixed(2)
              this.arrowPosition < 0 && (this.arrowPosition = (8 / ddWidth * 100).toFixed(2))
              centerX = 0
            } else if ((window.innerWidth - trRect.right) < ddWidth / 2) {
              this.arrowPosition = (50 + (centerX - (window.innerWidth - ddWidth)) / ddWidth * 100).toFixed(2)
              this.arrowPosition > 100 && (this.arrowPosition = ((ddWidth - 8) / ddWidth * 100).toFixed(2))
              centerX = window.innerWidth - ddWidth
            }
          }
        }


        let x = direction[0] * 0.5 * (ddRect.width + trRect.width)
        let y = direction[1] * shiftY
        // 偏移长度  根据需要显示的上下左右位置来产生 x,y
        // 如 下=> 0,1  x=0 表示不需要偏移 ,y = shiftY 表示像下偏移  shiftY 的长度
        // 其他位置同理

        if (this.pointer) { // 是否需要开启 pointer
          x += direction[0] * pointerSize
          y += direction[1] * pointerSize
        } // 如果需要加上箭头 则需要额外的 6px 的长度,与上方同理,分别对偏移量进行加减

        const scroll = this.getScroll() // 页面卷曲偏移度

        return {
          left: centerX + x + scroll.x,
          top: centerY + y + scroll.y
        }
        // 返回 popover 的位置 中心位置 加上 x,y 的偏移度
      },
      getScroll() {
        let obj
        obj = ((obj = document.documentElement) || (obj = document.body.parentNode)) && typeof obj.scrollLeft === 'number' ? obj : document.body
        this.getScroll = () => ({x: obj.scrollLeft, y: obj.scrollTop})
        return {x: obj.scrollLeft, y: obj.scrollTop}
      }
    },
    data() {
      return {
        visible: false,
        position: {
          left: 0,
          top: 0
        },
        delayFunc: null,
        theEvent: null,
        arrowPosition: 50
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      width: {
        type: [String, Number],
      },
      pointer: {
        type: Boolean,
        default: true
      },
      delay: {
        type: Number,
        default: 0
      },
      autoFix: {
        type: Boolean,
        default: false
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
          this.pointer && this.positionClass,
          'vue-popover',
        ]
      },
      style() {
        let selfStyle = this.position
        this.width && (selfStyle.width = `${this.width}px`)
        return selfStyle
      },
      arrow() {
        const position = this.theEvent.position
        return position === 'bottom' || position === 'top' ? {
          left: `calc(${this.arrowPosition}% - 6px)`
        } : {top: 'calc(50% - 6px)'}
      },
      positionClass() {
        return `dropdown-position-${this.theEvent.position}`
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
        [h('i', {
          style: this.arrow
        }),
          this.$slots.default]
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
        box-shadow: 0 4px 20px 0 rgba(52, 73, 94, 0.2);
        padding: 5px;
        border-radius: 5px;
        z-index: 998;
        i {
            display: block;
            position: absolute;
        }
        &.dropdown-position-bottom {
            i {
                border-left: @pointer-size solid transparent;
                border-right: @pointer-size solid transparent;
                border-bottom: @pointer-size solid #fff;
                top: -6px;
                filter: drop-shadow(0px -2px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-top {
            i {
                border-left: @pointer-size solid transparent;
                border-right: @pointer-size solid transparent;
                border-top: @pointer-size solid #fff;
                bottom: -6px;
                filter: drop-shadow(0px 2px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-left {
            i {
                border-top: @pointer-size solid transparent;
                border-bottom: @pointer-size solid transparent;
                border-left: @pointer-size solid #fff;
                right: -6px;
                filter: drop-shadow(2px 0px 2px rgba(52, 73, 94, 0.1));
            }
        }
        &.dropdown-position-right {
            i {
                border-top: @pointer-size solid transparent;
                border-bottom: @pointer-size solid transparent;
                border-right: @pointer-size solid #fff;
                left: -6px;
                filter: drop-shadow(-2px 0px 2px rgba(52, 73, 94, 0.1));
            }
        }
    }

</style>
