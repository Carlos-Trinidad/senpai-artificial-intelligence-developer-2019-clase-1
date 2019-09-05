/* console.log("Hello World");

setTimeout(() => {
    console.log("Hello World 2");
}, 3000);

setTimeout(() => {
    console.log("Hello World 3");
}, 0);

console.log("fin"); */

const express = require("express");
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(port, function () {
    console.log("Escuchando en el puerto " + 3000)
});