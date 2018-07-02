const express = require('express');
const router = express.Router();
const gamesRepository = require('../repositories/gamesRepository')

router.get('/', (req, res, next) => {
	res.send('nothing to see')
});

router.get('/getAllGames', async (req, res, next) => {
	try {
		const gameList = await gamesRepository.getAllGames();
		res.send(gameList);
	} catch(err) {
		res.status(500).send(`There was a problem getting games list.\n Error: ${err.message}`)
	};
});

router.post('/addGame', async (req, res, next) => {
	const game = req.body.game;

	try {
		await gamesRepository.addGame(game);
		res.send('Game was added successfully')
	} catch(err) {
		res.status(500).send(`There was a problem adding the game.\n Error: ${err.message}`)
	}
})

router.post('/updateGame', async (req, res, next) => {
	const game = req.body.game;

	try {
		await gamesRepository.updateGame(game);
		res.send('Game was updated successfully')
	} catch(err) {
		res.status(500).send(`There was a problem updating the game.\n Error: ${err.message}`)
	}
})

module.exports = router;
