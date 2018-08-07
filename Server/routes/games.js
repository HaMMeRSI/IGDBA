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

router.get('/getFilteredGames', async (req, res, next) => {
	const filter = JSON.parse(req.query.filter);

	try {
		const gameList = await gamesRepository.getFilteredGames(filter);
		res.send(gameList);
	} catch(err) {
		res.status(500).send(`There was a problem getting games list.\n Error: ${err.message}`)
	};
});

router.get('/getGameById', async (req, res, next) => {
	const gameId = req.query.gameId;

	try {
		const game = await gamesRepository.getGameById(gameId);
		res.send(game);
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

router.post('/deleteGame', async (req, res, next) => {
	const gameId = req.body.gameId;

	try {
		await gamesRepository.deleteGame(gameId);
		res.send('Game was deleted successfully')
	} catch(err) {
		res.status(500).send(`There was a problem deleting the game.\n Error: ${err.message}`)
	}
})

module.exports = router;
