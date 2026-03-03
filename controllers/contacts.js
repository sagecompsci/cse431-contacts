const mongodb = require("../db/connect")
const {ObjectId} = require("mongodb")

module.exports.getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db("contacts").collection("contacts").find();
    result.toArray().then((lists) => {
        res.setHeader("Content-type", "application/json");
        res.status(200).json(lists)
    })
}

module.exports.getContactFromId = async (req, res) => {
    const contact_id = new ObjectId(req.params.contactId)
    const result = await mongodb.getDb().db("contacts").collection("contacts").find({_id: contact_id})
    result.toArray().then((lists) => {
        res.setHeader("Content-type", "application/json");
        res.status(200).json(lists)
    })
}