<script>
  import {events} from './bus'

  export default {
    name: "popover",
    methods: {
      showEventListener() {
        console.log('show')
      },
      hideEventListener() {
        console.log('hide')
      }
    },
    data() {
      return {
        visible: false
      }
    },
    props:{
      name: {
        type: String,
        required: true
      },
      event: {
        type: String,
        default: 'click'
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
        return `show:${this.event}`
      },
      hideEventName() {
        return `hide:${this.event}`
      },
    },
    render(h) {
      return h('div', 'test')
    }
  }
</script>

<style scoped>

</style>