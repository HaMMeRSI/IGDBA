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
	getFilteredGames: async (filter) => {
		try {
			const client = await dbHelper.getDbClient();
			const gamesList = await dbHelper.findInCollection(client, 'IGDB', 'GameCollection', filter);
			dbHelper.closeClient(client);

			return gamesList;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getGameById: async (gameId) => {
		try {
			const client = await dbHelper.getDbClient();
			const game = await dbHelper.findById(client, 'IGDB', 'GameCollection', gameId);
			dbHelper.closeClient(client);

			return game;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	addGame: async (newgame) => {
		try {
			const client = await dbHelper.getDbClient();
			result = await dbHelper.insertToCollection(client, 'IGDB', 'GameCollection', newgame);
			dbHelper.closeClient(client);

			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	updateGame: async (game) => {
		try {
			const client = await dbHelper.getDbClient();
			const { _id, ...fields } = game;
			result = await dbHelper.updateInCollection(client, 'IGDB', 'GameCollection', _id, { $set: fields })
			dbHelper.closeClient(client);

			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	deleteGame: async (gameId) => {
		try {
			const client = await dbHelper.getDbClient();
			result = await dbHelper.deleteFromCollection(client, 'IGDB', 'GameCollection', gameId)
			dbHelper.closeClient(client);

			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	gamesByGenre: async () => {
		try {
			const client = await dbHelper.getDbClient();
			const gamesByGenre = await dbHelper.groupBy(client, 'IGDB', 'GameCollection', { _id: '$genre', count: { $sum: 1 } }, {})
			dbHelper.closeClient(client);

			return gamesByGenre.map((game) => {
				return {
					genre: game._id,
					gameCount: game.count
				}
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}

module.exports = gamesRepository;