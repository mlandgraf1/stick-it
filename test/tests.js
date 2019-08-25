const supertest = require('supertest');
const app = require('../app');

describe('GET all sticks', () => {
    it('respond with a list of all sticks', (done) => {
        supertest(app)
            .get('/hockey')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})

describe('GET /hockey/:flex/:curve/:ageLevel/:price', () => {
    it('respond with an existing stick', (done) => {
        supertest(app)
            .get('/hockey/77/P88/Senior/300')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})

describe('GET /hockey/:flex/:curve/:ageLevel/:price', () => {
    it('respond with stick not found', (done) => {
        supertest(app)
            .get('/hockey/77/P88/Senior/50')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })
})

