export default (io) => {
  // console.log(res.locals.username);
  io.on('connection', (socket: { on: (arg0: string, arg1: (msg: any) => void) => void; })=> {
    socket.on('chat', (msg: any) => {
      io.emit('chat', `Hugo: ${msg}`);
    });
  });
}