import request from 'supertest';
import { app } from '../src/app';


describe("index.ts tests", () => {
    test("Math test", () => {
        expect(2 + 2).toBe(4);
    });
});

describe('Initial test for app.ts', () => {
    it('Should return Success with 200 status code', async () => {
        const response = await request(app)
            .post('/')
            .send({ username: 'John', email: 'johndoe123@gmail.com' })
            .expect(200)

        expect(response.text).toEqual('OK')
        console.log(response)
    });

    it('Should return Error with 400 status code', async () => {
        const response = await request(app)
            .post('/')
            .send({ email: 'johndoe123@gmail.com' })
            .expect(400)

        expect(response.text).toEqual('Please provide the necessary fields')
    })
});