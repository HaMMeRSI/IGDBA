const WebSocket = require('ws');
const gamesRepository = require('./repositories/gamesRepository');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', async (ws, req) => {
	const ip = req.connection.remoteAddress;
	console.log(`Client connected: ${ip}`)

	ws.on('message', (message) => {
		console.log(`Message recieved: ${message}`);

		for (client of wss.clients) {
			wss.clients.forEach((client) => {
				if (client !== ws && client.readyState === WebSocket.OPEN) {
					const gamesList = await gamesRepository.getAllGames();
					client.send(gamesList);
				}
			});
		}
	});
});