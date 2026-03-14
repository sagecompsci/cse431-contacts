const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongodb = require("./db/connect")
const contactRoute = require("./routes/contacts")

const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger.json")

const port = process.env.PORT || 8000

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.use("/", contactRoute)

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port)
        console.log(`Connected to DB and listening on ${port}`)
    }
})
