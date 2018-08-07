const { MongoClient, ObjectId } = require('mongodb');
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
	findById(client, dbName, collectionName, id) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).findOne({ "_id": ObjectId(id)}, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},
	groupBy(client, dbName, collectionName, groupParams, match) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).aggregate([ { $match: match }, { $group: groupParams } ]).
				toArray((err, result) => {
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
	updateInCollection(client, dbName, collectionName, query, newvalues) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).updateOne(query, newvalues, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},
	deleteFromCollection(client, dbName, collectionName, query) {
		return new Promise((resolve, reject) => {
			client.db(dbName).collection(collectionName).deleteOne(query, (err, result) => {
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