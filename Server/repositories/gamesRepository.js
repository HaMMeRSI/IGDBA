const dbHelper = require('../dbHelper');

const gamesRepository = {
	getAllGames: async () => {
		try {
			const client = await dbHelper.getDbClient();
			const gamesList = await dbHelper.findInCollection(client, 'IGDB', 'GameCollection', {});
			dbHelper.closeClient(client);

			return gamesList;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	addGame: async (newgame) => {
		try {
			const client = await dbHelper.getDbClient();
			await dbHelper.insertToCollection(client, 'IGDB', 'GameCollection', newgame);
			dbHelper.closeClient(client);
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}

module.exports = gamesRepository;