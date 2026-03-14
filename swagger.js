const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "My API",
        description: "Contacts"
    },
    host: "localhost:8000"
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/contacts.js"]

swaggerAutogen(outputFile, endpointFiles, doc)