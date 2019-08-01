<template>
  <div>
    <h3>WebSocket Go</h3>
    <pre id="output"></pre>
    <b-button @click="sendWebSocket">click here</b-button>
  </div>
</template>

<script>

   var url = 'ws://localhost:12312/ws';
   var c = new WebSocket(url);
   export default {
     name: "chatroom",
     data() {
       return {}
     },
     methods: {
       sendWebSocket() {
           c.send("a")

       },
       send(data){
         console.log("ok")
       }
     },mounted() {
       c.onmessage = function (msg) {
         console.log(msg)
         $("#output").append((new Date()) + " <== " + msg.data + "\n")
       }
     }
   }
</script>


<style>
  .form {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f9f9f9;
    border-top: 1px solid #78b8ef;
    padding: 5px 10px;
  }

  .form .placeholder, .form .input-message, .form button {
    display: block;
    margin-bottom: 5px;
  }

  .form .input-message {
    padding: 7px;
    border: 1px solid #ecebeb;
    border-radius: 4px;
    width: -webkit-fill-available;
  }

  .form button {
    width: 100%;
    color: white;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #78b8ef;
    border: 1px solid #5a9ed8;
  }

  .container {
    margin-bottom: 50px;
  }

  .container p {
    display: block;
  }
</style>
