// import Popover    from './Popover.vue'
// import Tooltip    from './Tooltip.vue'
// import { events } from './bus'

const defaultPosition = 'bottom'

const prepareBinding = ({ arg = '', modifiers = {}, value = {} }) => {
  let mods = Object.keys(modifiers)
  let name = typeof value === 'object' && value.name ? value.name : arg
  let position = mods[0] || value.position || defaultPosition

  return { name, position, value }
}

const addClickEventListener = (target, params) => {
  const click = (srcEvent) => {
    events.$emit('show:click', { ...params, target, srcEvent })

    let handler = (srcEvent) => {
      events.$emit('hide:click', { ...params, target, srcEvent })
      document.removeEventListener('click', handler)
    }

    document.addEventListener('click', handler)
    srcEvent.stopPropagation()
  }

  target.addEventListener('click', click)

  target.$popoverRemoveClickHandlers = () => {
    target.removeEventListener('click', click)
  }
}

const addHoverEventListener = (target, params) => {
  const mouseenter = (srcEvent) => {
    events.$emit('show:hover', { ...params, target, srcEvent })
  }

  const mouseleave = (srcEvent) => {
    events.$emit('hide:hover', { ...params, target, srcEvent })
  }

  target.addEventListener('mouseenter', mouseenter)
  target.addEventListener('mouseleave', mouseleave)

  target.$popoverRemoveHoverHandlers = () => {
    target.removeEventListener('mouseenter', mouseenter)
    target.removeEventListener('mouseleave', mouseleave)
  }
}

export default {
  install(Vue, params = {}) {
    document.addEventListener('resize', (event) => {
      events.$emit('hide', {srcEvent: event})
    })

    // Vue.component('Popover', Popover)

    Vue.directive('popover', {
      bind(target, binding) {
        console.log('bind', target, binding)
        // 例子1:
        // 如果为 v-popover=name   name='foo' 这种格式:
        // 则binding.value = 'foo'




        // let params = prepareBinding(binding)
        //
        // addClickEventListener(target, params)
        // addHoverEventListener(target, params)
      },
      update(target, binding) {
        console.log('update', target, binding)
        if (binding.value !== binding.oldValue) {
          // 暂定  绑定的值发生变化
        }
      },
      unbind(target, binding) {
        console.log('unbind')
        target.$popoverRemoveHoverHandlers()
        target.$popoverRemoveClickHandlers()
      }
    })
  }
}