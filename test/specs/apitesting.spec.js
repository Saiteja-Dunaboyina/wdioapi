const { expect } = require('@wdio/globals')
const { default: axios } = require('axios')

var token,bookingId
describe("API Testing" , () => {
const baseUrl = "https://restful-booker.herokuapp.com"
    it("Token generation" , async () => {
        const response = await axios.post(baseUrl+ "/auth" , {
            "username" : "admin",
            "password" : "password123"
        })
        token = response.data.token;
        console.log(token , "================");
        expect(response.status).toBe(200);
    })

    it("Getting all booking ids" , async () => {
        const response = await axios.get( baseUrl+"/booking");
        const responseData = response.data;
        console.log(responseData);
        bookingId = responseData[1].bookingid;
        expect(response.status).toBe(200);
    })

    it("Create Booking details" , async () => {
        const response = await axios.post(baseUrl+"/booking", {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
        "additionalneeds" : "Breakfast"
        });
        const responseData =await  response.data;
        console.log(responseData)
        expect(response.status).toBe(200)

    })

    it("Getting booking details based on bookingid", async () => {
        const response = await axios.get(`${baseUrl}/booking/${bookingId}`);
        const responseData = response.data;
        console.log(responseData)
    })


})