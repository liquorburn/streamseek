<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col class="col-12 text-right">
        <h6>{{ socketMessage }}</h6>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Status',
  data () {
    return {
      socketMessage: 'You are not logged in'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let t = this
      // this.$socket.sendObj({ awesome: 'data' })
      this.$options.sockets.onmessage = function (data) {
        t.socketMessage = data.data
      }
      this.$options.sockets.onreconnect = function () {
        t.socketMessage = 'Back online'
      }
      this.$options.sockets.onclose = function (data) {
        t.socketMessage = 'Server is down'
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
