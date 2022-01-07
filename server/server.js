"use strict";

const app = require("./app");
// const { PORT } = require("./config");
const PORT = +process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(PORT, function () {
    console.log(`Started on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({message: "Hello this is server"})
})