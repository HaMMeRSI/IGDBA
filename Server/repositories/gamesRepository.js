const dbHelper = require('../dbHelper');

const gamesRepository = {
	getAllGames: async () => {
		try {
			const client = await dbHelper.getDbClient();
			const gamesList = await dbHelper.findInCollection(client, 'IGDB', 'GameCollection', {});
			dbHelper.closeClient(client);

			return gamesList;
		}
		catch (err) {
			console.log(err);
		}
	}
}

module.exports = gamesRepository;