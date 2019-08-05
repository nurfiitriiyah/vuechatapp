<template>
  <div>
    <h3>WebSocket NODE</h3>
    <input id="username" type="text" placeholder="Username"/>
    <button @click="send_username()" id="send_username">Klik</button>
    <hr>
    <input id="message" type="text" placeholder="Username"/>
    <button @click="send_message()" id="send_message">Klik</button>
  </div>
</template>

<script>
  export default {
    name: "chatroom",
    data() {
      return {}
    }, sockets: {
      connect: function () {
        console.log('socket connected')
      },
      customEmit: function (data) {
        console.log(data)
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      }
    }, methods: {
      send_username() {
        var username = $("#username")
        this.$socket.emit('change_username', {username: username.val()})
      }, send_message() {
        var message = $("#message")
        this.$socket.emit('new_message', {message: message.val()})
      }
    }, mounted() {
      this.sockets.subscribe('new_message', (data) => {
        console.log(data)
      });
    }
  }
</script>
