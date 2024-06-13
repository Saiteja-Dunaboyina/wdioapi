const { expect } = require('@wdio/globals')
const { default: axios } = require('axios')

var token,bookingId
describe("API Testing" , () => {

    const reqBaseUrl = "https://reqres.in";
    var id
    it("Getting all the list of users", async () => {
        const response = await axios.get(`${reqBaseUrl}/api/users?page=2`);
        const responseData = response.data;
        console.log(responseData);
        await expect(response.status).toBe(200);
    })

    it("Getting single user by id" , async () => {
        const response = await axios.get(`${reqBaseUrl}/api/users/2`);
        const responseData = response.data;
        console.log(responseData);
        await expect(response.status).toBe(200);
    })

    it("Create a user" , async () => {
        const response = await axios.post(`${reqBaseUrl}/api/users` , 
            {
                "name": "morpheus",
                "job": "leader"
            }
        );
        const responseData = response.data;
        console.log(responseData)
        id = response.data.id
        console.log(id , "====================")
        await expect(response.status).toBe(201);
    })

    it("Update the user" , async () => {
        const response = await axios.put(`${reqBaseUrl}/api/users/${id}` , 
            {
                "name": "morpheus",
                "job": "zion resident"
            }
        );
        const responseDate = response.data;
        console.log(responseDate);
        await expect(response.status).toBe(200);
    })

    it("Delete the user" , async () => {
        const response = await axios.delete(`${reqBaseUrl}/api/users/${id}`);
        await expect(response.status).toBe(204);
    })

})