const express = require('express');
const router = express.Router();
const eventsRepository = require('../repositories/eventsRepository')

router.get('/', (req, res, next) => {
	res.send('nothing to see')
});

router.get('/getAllEvents', async (req, res, next) => {
	try {
		const eventList = await eventsRepository.getAllEvents();
		res.send(eventList);
	} catch(err) {
		res.status(500).send(`There was a problem getting events list.\n Error: ${err.message}`)
	};
});

module.exports = router;
