const express = require("express");
router = express.Router()

const contactController = require("../controllers/contacts")

router.get("/", contactController.getAllContacts)

router.get("/:contactId", contactController.getContactFromId)

module.exports = router