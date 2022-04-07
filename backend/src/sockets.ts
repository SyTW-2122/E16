import {chatSchema} from './models/chat'

export default io => {

  let users = {};

  io.on('connection', async socket => {

    let messages = await chatSchema.find({}).limit(8).sort('-created');

    socket.emit('load old msgs', messages);

    socket.on('new user', (data, cb) => {
      if (data in users) {
        cb(false);
      } else {
        cb(true);
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNicknames();
      }
    });

    // receive a message a broadcasting
    socket.on('send message', async (data, cb) => {
      var msg = data.trim();

      // Enviar mensajes privados con /w [user destino] [msg]
      if (msg.substr(0, 3) === '/w ') {
        msg = msg.substr(3);
        var index = msg.indexOf(' ');
        if(index !== -1) {
          var name = msg.substring(0, index);
          var msg = msg.substring(index + 1);
          if (name in users) {
            users[name].emit('whisper', {
              msg,
              owner: socket.nickname 
            });
          } else {
            cb('Error! Enter a valid User');
          }
        } else {
          cb('Error! Please enter your message');
        }
      } else {
        // Mensaje normal
        var newMsg = new chatSchema({
          owner: socket.nickname,
          message: msg
        });
        await newMsg.save();
      
        io.sockets.emit('new message', {
          message: msg,
          owner: socket.nickname
        });

      }
    });

    socket.on('disconnect', data => {
      if(!socket.nickname) return;
      delete users[socket.nickname];
      updateNicknames();
    });

    function updateNicknames() {
      io.sockets.emit('usernames', Object.keys(users));
    }
  });

}