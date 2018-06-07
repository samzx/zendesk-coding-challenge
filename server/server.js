const express = require('express');
const fetch = require('node-fetch');
const base64 = require('base-64');

const app = express();

const server = app.listen(8081, () => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });

    const port = server.address().port

    console.log("Server app listening on port", port)

    const url = 'https://solexstudios.zendesk.com';
    const api = '/api/v2/tickets.json';
    const username = "team@solexstudios.com";
    const password = "solexstudios";

    const auth = 'Basic ' + base64.encode(username + ":" + password);

    app.get('/', (req, res) => {
        fetch(url + api , {
            method: 'GET',
            headers: {
                "Authorization": auth
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.send(json);
        })
        .catch((e) => {
            res.send(e);
        })
    });

})