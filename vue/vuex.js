// In a Vue component, you can access the store
//  as this.$store. Now we can commit a mutation using a 
//  component method:

methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
