// In Vue 3, data is made reactive by leveraging JavaScript Proxies. Users coming from Vue 2 should be aware of the following edge case:

export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}