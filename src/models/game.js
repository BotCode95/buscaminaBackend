const {Schema, model} = require('mongoose')

const GameSchema = Schema({
    game : {
        id: {type: String},
        created : {
            type: String,
            required: true
        },
        state : {
            code : {type : String},
            description : {
                type: String, 
                enum:{
                    values: ['CREATED', 'WON', 'LOST'],
                    message: '{VALUE} es inválido'
                }
            }
        },
    },
    cells :[]
})

GameSchema.methods.toJSON = function(){
    const {__v, _id, ...game} = this.toObject();
    return game;
}

module.exports = model('Game', GameSchema);