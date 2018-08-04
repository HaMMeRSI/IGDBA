const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		console.log('received: %s', message);

		for (client of wss.clients) {
			wss.clients.forEach((client) => {
				if (client !== ws && client.readyState === WebSocket.OPEN) {
					client.send(message);
				}
			});
		}
	});
});