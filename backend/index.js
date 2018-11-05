const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('videoStream', function (streamUrl) {
        console.log('run');
        socket.emit('videoRecive', streamUrl);
    });
});


app.get('/', (req, res) => res.json({ run: 'ok' }));

server.listen(5000, () => console.log('run on 5000'));