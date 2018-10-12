<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col class="col-12 text-right">
        <h6>Client status: {{ message }}</h6>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Status',
  data () {
    return {
      message: ''
    }
  },
  created: function () {
    this.$socket.send('some data')
    let t = this
    this.$options.sockets.onmessage = (data) => t.message = data
    this.message = 'wella'
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
@import "./status.scss";
</style>
