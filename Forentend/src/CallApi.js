import axios from 'axios'

const url = "http://localhost:3020"

export const CallApi = async (req, endpoint, body) => {
    console.log("req", req);
    console.log("endpoint", endpoint);
    console.log("body", body);
    return new Promise((resolve, reject) => {
        var config = {
            method: req,
            url: url + endpoint,
            data: body
        };
        axios(config)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    })
}