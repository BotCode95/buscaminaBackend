const express = require('express');
const router = express.Router();
const {newGame,getGameById, createGame, updateGame, deleteGame} = require('../controllers/game');

router.get('/', newGame);
router.get('/:id', getGameById);
router.post('/', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

module.exports = router;