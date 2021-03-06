const WebSocket = require('ws');

const server = new WebSocket.Server({port:3000});

server.on('connection', ws => {
	ws.on('message', message => {
		server.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	ws.send('Start Web Socket');
});

console.log('Server run');