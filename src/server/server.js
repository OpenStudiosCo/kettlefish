// test
const server = require('http').createServer();

const io = require('socket.io')(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
  cors: true,
  origins: 'http://localhost'
});

io.on('connection', function(socket){
  console.log('is connected');
  socket.emit('ping', 'bla bla bla');
});

server.listen(42069);
