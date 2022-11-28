const request = require('supertest');
const makeApp = require('../../app');
const appForTest = makeApp();
const sinon = require('sinon') ;
const knexCommands = require('../queries/userQueries')

describe("GET REQUEST/",()=>{
    let query ;
    let dataForTest
    beforeEach(()=>{
        dataForGetRequest=[
            {
                id:1,
                firstname:"Abhi",
                lastname: "Bhosale",
                age:20
            },
            {
                id:2,
                firstname:"Rushi",
                lastname: "Gaikwad",
                age:27
            },
            {
                id:1,
                firstname:"Meenamama",
                lastname: "Swami",
                age:25
            },
        ]

        query = sinon.stub(knexCommands,"getUsers").resolves([
            {
                id:1,
                firstname:"Abhi",
                lastname: "Bhosale",
                age:20
            },
            {
                id:2,
                firstname:"Rushi",
                lastname: "Gaikwad",
                age:27
            },
            {
                id:1,
                firstname:"Meenamama",
                lastname: "Swami",
                age:25
            },
        ])
    })
    afterEach(()=>{
        query.restore();
    })

    test("receiving 200 status code", async () => {
        let response = await request(appForTest).get("/users/get");
        expect(response.statusCode).toBe(200);
      });

    test("Checking the fetched request body",async()=>{
        let response = await request(appForTest).get("/users/get");
        expect(response.body).toEqual({
            code : 200 ,
            message : 'Get Request Successful',
            data : dataForGetRequest,
        })
    })
})

/// POST REQUEST
describe("POST REQUEST",()=>{
    let query ;
    let dataForPostRequest
    beforeEach(()=>{
         dataForPostRequest = [
            {
                id: 4,
                firstname : "Ganesh",
                lastname : "Swami",
                age : 25
            }
        ]
        query = sinon.stub(knexCommands,"postUsers").resolves([
            {
                id: 4,
                firstname : "Ganesh",
                lastname : "Swami",
                age : 25
            }
        ])
    })

    afterEach(()=>{
        query.restore() ;
    })

    test("receiving 200 status code",async ()=>{
        let response = await request(appForTest).post("/users/post");
        expect(response.statusCode).toBe(200)
    })

    test("Checking the post request body",async()=>{
        let response = await request(appForTest).post("/users/post");
        expect(response.body).toEqual({
            code : 200 ,
            message : 'Post Request Successful',
            data : dataForPostRequest,
        })
    })

})

/// PUT REQUEST TESTING :

describe('PUT REQUEST TESTING',()=>{
    let query ;
    let dataForPutRequest ;

    beforeEach(()=>{
        dataForPutRequest= [
            {
                id:1,
                name : "ABD"
            }
        ]

        query = sinon.stub(knexCommands,'updateUsers').resolves([
            {
                id:1,
                name : "ABD"
            }
        ])
    })

    afterEach(()=>{
        query.restore()
    })

    test('Put Request 200 Status Code Check',async()=>{
        let response = await request(appForTest).put("/users/put/1");
        expect(response.statusCode).toBe(200) ;
    })

    test('Put Request Body Testing',async()=>{
        let response = await request(appForTest).put("/users/put/1");
        expect(response.body).toEqual({
            code  : 200,
            message : 'Update Request Successful',
            data : dataForPutRequest
        })
    })
})

/// DELETE REQUEST TESTING :

describe('DELETE REQUEST',()=>{
    let query
    let dataForDelete

    beforeEach(()=>{
        dataForDelete = [{
            id : 3,
            firstname : "AB",
            lastname: "Devilliers",
            age : 38
        }]

        query = sinon.stub(knexCommands,"deleteUsers").resolves({
            id: 3
        })
    })

    afterEach(()=>{
        query.restore() ;
    })

    test('CHECK DELETE REQUEST STATUS CODE 200',async()=>{
        let res = await request(appForTest).delete("/users/delete/3") ;
        expect(res.statusCode).toBe(200) ;
    })
})

