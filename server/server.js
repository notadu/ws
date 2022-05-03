const http = require("http");
const express = require( "express");
const WebSocket = require( "ws");

let users = [];

const app = express();

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', msg => {
        const payload = JSON.parse(msg);

        if (payload.type === "join") {
            users.push(payload.data.name);
        }

        webSocketServer.clients.forEach(client => client.send(msg));
    });
    ws.on("error", e => ws.send(e));
});

server.listen(3030, () => console.log("Server started"))
