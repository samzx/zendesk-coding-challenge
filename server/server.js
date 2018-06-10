const express = require('express');
const fetch = require('node-fetch');
const base64 = require('base-64');

const app = express();

const url = 'https://solexstudios.zendesk.com';
const username = "team@solexstudios.com";
const password = "solexstudios";
const auth = 'Basic ' + base64.encode(username + ":" + password);

const server = app.listen(8081, () => {

    // Enable CORS for client only
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    const port = server.address().port
    console.log("Server app listening on port", port)

    // Handle page of tickets request
    app.get('/tickets/:page', (req, res) => {
        const tickets = `/api/v2/tickets.json?sort_by=created_at&sort_order=desc&page=${req.params.page}&per_page=25`;
        fetch(url + tickets , {
            method: 'GET',
            headers: {
                "Authorization": auth
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            } else {
                throw response;
            }
        })
        .then((json) => {
            res.send(json);
        })
        .catch((e) => {
            console.log(`Failed to get tickets for page ${req.params.page}.`);
            res.status(e.status);
            res.send(e);
        })
    });
})
