const WebSocket = require('ws');
const wsSrv = new WebSocket.Server({
  port: 9091,
  clientTracking: true
  }, function () {})

module.exports = webSock = (function(){
  wsSrv.on('listening', function listening(ws) {
    console.log('ws server listening')
  })
  wsSrv.on('connection', function connection(ws) {
    console.log('client connected to ws server. Active clients: '
      + wsSrv.clients.size)
    ws.on('message', function incoming(message) {
      console.log('received: %s', message)
    })
    let intervalId = setInterval(function() {
      let clientStatus = typeof slskClient
      if (clientStatus != 'undefined')
        ws.send('Logged in')
      else ws.send('You are not logged in')
    }, 5000)
    ws.on('close', function() {
      console.log('client disconnected from ws server. Active clients: '
        + wsSrv.clients.size)
      clearInterval(intervalId)
    })
  })
}())
