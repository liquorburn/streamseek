<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col class="col-12 text-right">
        <h6>Client status: {{ socketMessage }}</h6>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Status',
  data () {
    return {
      socketMessage: 'disconnected'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let t = this
      // this.$socket.sendObj({ awesome: 'data' })
      this.$options.sockets.onmessage = function (data) {
        t.socketMessage = data.data
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="sass">
@import "./status.scss";
</style>
