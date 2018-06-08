const express = require('express');
const fetch = require('node-fetch');
const base64 = require('base-64');

const app = express();

let ticket_id;
const url = 'https://solexstudios.zendesk.com';
const tickets = '/api/v2/tickets.json';
const comments = `/api/v2/tickets/${ticket_id}/comments.json`;
const username = "team@solexstudios.com";
const password = "solexstudios";

const server = app.listen(8081, () => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    const port = server.address().port

    console.log("Server app listening on port", port)

    const auth = 'Basic ' + base64.encode(username + ":" + password);

    app.get('/tickets', (req, res) => {
        const start = new Date().getTime();
        console.log("Handling request...")
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
                throw 'Bad response';
            }
        })
        .then((json) => {
            res.send(json);
            const delta = new Date().getTime() - start;
            console.log(`Response sent after ${delta} ms`);
        })
        .catch((e) => {
            console.log("Failed to get requested resource.");
            res.status(401);
            res.send(e);
        })
    });

    // TODO: Get comments for a ticket.
    app.get('/comments', (req, res) => {
        ticket_id = req.body.id;
        const start = new Date().getTime();
        console.log("Handling request...")
        fetch(url + comments , {
            method: 'GET',
            headers: {
                "Authorization": auth
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            } else {
                throw 'Bad response';
            }
        })
        .then((json) => {
            res.send(json);
            const delta = new Date().getTime() - start;
            console.log(`Response sent after ${delta} ms`);
        })
        .catch((e) => {
            console.log("Failed to get requested resource.");
            res.status(401);
            res.send(e);
        })
    });

})