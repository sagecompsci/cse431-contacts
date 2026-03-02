const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Web service is listening on ${process.env.PORT || 8000}`)
})