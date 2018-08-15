import Popover from './popover.vue'
import {events} from './bus'

// const defaultPosition = 'bottom'

const prepareBinding = ({modifiers = {}, value = {}}) => {
  let mods = Object.keys(modifiers) // 修饰符
  let name = typeof value === 'object' && value.name || value
  let trigger = mods[0] || value.trigger || 'click'

  return {name, trigger, value}
}

const addClickEventListener = (target, params) => {
  const click = (srcEvent) => {
    events.$emit(params.name + ':show', {...params, target, srcEvent})

    let handler = (srcEvent) => {
      events.$emit(params.name + ':hide', {...params, target, srcEvent})
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
    events.$emit(params.name + ':show', {...params, target, srcEvent})
  }

  const mouseleave = (srcEvent) => {
    events.$emit(params.name + ':hide', {...params, target, srcEvent})
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

    Vue.component('Popover', Popover)

    Vue.directive('popover', {
      bind(target, binding) {
        console.log('bind', target, binding)
        // 例子1:
        // 如果为 v-popover=name   name='foo' 这种格式:
        // 则binding.value = 'foo'

        let params = prepareBinding(binding)
        // {name, trigger, value}
        // name 名 ? name 仍需加强联系
        // trigger 触发 ? 是否需要
        // value 将质量的 value 传下去

        console.log(params)
        params.trigger === 'click' ?
          addClickEventListener(target, params) :
          addHoverEventListener(target, params)
      },
      update(target, binding) {
        console.log('update', target, binding)
        if (binding.value !== binding.oldValue) {
          // 暂定  绑定的值发生变化
        }
      },
      unbind(target, binding) {
        console.log('unbind')
        target.$popoverRemoveHoverHandlers && target.$popoverRemoveHoverHandlers()
        target.$popoverRemoveClickHandlers && target.$popoverRemoveClickHandlers()
      }
    })
  }
}