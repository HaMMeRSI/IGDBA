const express = require('express');
const router = express.Router();
const gamesRepository = require('../repositories/gamesRepository')

router.get('/', (req, res, next) => {
	res.send('nothing to see')
});

router.get('/getAllGames', async (req, res, next) => {
	const gameList = await gamesRepository.getAllGames();
	res.send(gameList);
});

module.exports = router;
