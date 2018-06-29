const MongoClient = require('mongodb').MongoClient;
const { connectionUrl } = require('./appConfig');

const dbHelper = {
	getDbClient() {
		return new Promise((resolve, reject) => {
			MongoClient.connect(connectionUrl, (err, client) => {
				if (err) {
					reject(err);
				} else {
					resolve(client);
				}
			});
		});
	},
	findInCollection(client, dbName, collectionName, query) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).find(query).toArray((err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},
	insertToCollection(client, dbName, collectionName, newObject) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).insertOne(newObject, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},
	closeClient(client) {
		client.close();
	}
}

module.exports = dbHelper;