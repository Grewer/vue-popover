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
    },
    render(h) {
      return h('div', 'test')
    }
  }
</script>

<style scoped>

</style>