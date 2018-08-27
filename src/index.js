import Popover from './popover.vue'
import {events} from './bus'


const prepareBinding = ({modifiers = {}, value = {}}) => {
  let mods = Object.keys(modifiers) // 修饰符
  let name = typeof value === 'object' && value.name || value
  let trigger = mods[0] || value.trigger || 'click'
  let position = value.position || 'bottom'
  return {name, trigger, value, position}
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

function unBind(target) {
  target.$popoverRemoveHoverHandlers && target.$popoverRemoveHoverHandlers()
  target.$popoverRemoveClickHandlers && target.$popoverRemoveClickHandlers()
}

function bind(target, binding) {
  let params = prepareBinding(binding)
  params.trigger === 'click' ?
    addClickEventListener(target, params) :
    addHoverEventListener(target, params)
}

export default {
  install(Vue, params = {}) {
    Vue.component('Popover', Popover)

    Vue.directive('popover', {
      bind(target, binding) {
        // 例子1:
        // 如果为 v-popover=name   name='foo' 这种格式:
        // 则binding.value = 'foo'

        // {name, trigger, value}
        // name 名  name 仍需加强联系
        // trigger 触发  是否需要
        // value 将质量的 value 传下去
        // position 位置 默认为'bottom

        bind(target, binding)
      },
      update(target, binding) {
        if (binding.value !== binding.oldValue) {
          if (binding.value.name && (binding.value.name !== binding.oldValue.name)) {
            unBind(target)
            bind(target, binding)
          } else if (typeof binding.value !== 'object' && binding.value !== binding.oldValue) {
            unBind(target)
            bind(target, binding)
          }
        }
      },
      unbind(target, binding) {
        unBind(target)
      }
    })
  }
}