"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get("/testsdassd", function (req, res) {
    console.log(req);
    res.send({ name: "yoon sang seok", age: 99, friends: ["ss", "ys", "ye"] });
    res.send("sadjklas");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=01.js.map