const dbHelper = require('../dbHelper');

const eventsRepository = {
	getAllEvents: async () => {
		try {
			const client = await dbHelper.getDbClient();
			const eventsList = await dbHelper.findInCollection(client, 'IGDB', 'EventCollection', {});
			dbHelper.closeClient(client);

			return eventsList;
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}

module.exports = eventsRepository;