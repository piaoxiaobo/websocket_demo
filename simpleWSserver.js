var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });


wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  //引入json数据
  const data = require('./data/server.json');
  //转换数据类型
  var demo =JSON.stringify(data);
  console.log(typeof demo);
  //发送数据
  ws.send(demo);
});