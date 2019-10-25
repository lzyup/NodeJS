const net = require('net');

const server = net.createServer((socket) => {
    let oldBuffer = null;
    socket.on('data', function (buffer) {
        //把上一次data事件使用残余的buffer接上来
        if (oldBuffer) {
            buffer = Buffer.concat([oldBuffer, buffer]);
        }
        
    })
})