const app = require('../../app').app;
const request = require('supertest')


describe('GET /game', () => {

    test('should response with status 201',async () => { 
        const response = await request(app)
            .get('/api/game').send()
         expect(response.status).toBe(201)
    })

    test('should have a content-type: application/json', async () => {
        const response = await request(app).get('/api/game').send()
        expect(response.type).toBe('application/json')
    })

    test('when a game contains Id response with actually game', async () => {
        const response = await request(app).get('/api/game/M67REZ8NPWJG94KVGOPP').send()
        expect(response.body.game.state.description).toBe('CREATED')
    })
})

describe('POST /game', () => {

    test('should have a content-type: application/json', async () => {
        const response = await request(app).post('/api/game').send()
        expect(response.header['content-type']).toEqual(expect.stringContaining('json'))
    })

    test('should responde with status 201', async () => {
        const response = await request(app).post('/api/game').send({
            game: {
                id: "M67REZ8NPWJG94KVGOPP",
                created: "2022-05-22T17:18:26.259101-03:00",
                state: {
                    code : "1",
                    description : "CREATED"
                }
            },
            cells : []
        })
        console.log("response" + response.body)
        expect(response.body.game.id).toBeDefined();
    })

    test('when data is missing response with status 400',async () => {
        const response = await request(app)
            .post('/api/game').send()
         expect(response.status).toBe(400)
    })
})
