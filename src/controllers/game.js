const {v4} = require('uuid');
const game = require('../models/game');
const Game = require('../models/game');


const newGame = async (req,res) => {
    try {
        const game = new Game({
            "game": {
                "state": {
                    "code": "1",
                    "description": "CREATED"
                },
                "id": v4(),
                "created": Date()
            },
            "cells": []
        });
        await game.save();
        res.status(201).json(game);
    } catch (error) {
    
    res.status(400).json({ Error: error?.message});
    }
}
const getGameById = async (req,res) => {
    const {id} = req.params;
    try {
        const game = await Game.findOne({id});
        res.status(200).json(game);

    } catch (error) {
        
        res.status(400).json({ Error: 'Esta partida no se encuentra en la base de datos'});
    }
}

const createGame = async (req,res) => {
    const {game, cells} = req.body;
    try {
        const NewGame = new Game({game, cells});
        await NewGame.save();
        res.status(201).json(NewGame);
    } catch (error) {
        res.status(400).json({ Error: error?.message});
    }
}

const updateGame = async (req,res) => {
    const {id} = req.params;
    const {...restParams} = req.body;
    try {
        const game = await Game.findOneAndUpdate({id}, restParams);
        if(game === null) {
            throw new Error('No se encuentra el id en la base de datos')
        }
        
        res.json({msg: 'Juego Actualizado',game});
    } catch (error) {
        res.status(400).json({ Error: error?.message});
    }
}

const deleteGame = async (req,res) => {
    const {id} = req.params;
    try {
        const game = await Game.findOneAndDelete({id});
        if(game === null) {
            throw new Error('No se encuentra el id en la base de datos')
        }
        res.json({msg: 'Juego Eliminado'});
    } catch (error) {
        res.status(400).json({ Error: error?.message});
    }
}

module.exports = {
    newGame,
    getGameById,
    createGame,
    updateGame,
    deleteGame
}