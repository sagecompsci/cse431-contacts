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
module.exports.createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db("contacts").collection("contacts").insertOne(contact)
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occurred while creating the contact.")
    }
}

module.exports.updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.contactId)
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db("contacts").collection("contacts").replaceOne({_id: contactId}, user)
    console.log(response)
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occurred while updating the contact.")
    }
}


module.exports.deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.contactId)
    const response = await mongodb.getDb().db("contacts").collection("contacts").deleteOne({_id: contactId})
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occurred while deleting the contact.")
    }
}
