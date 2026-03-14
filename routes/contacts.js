const express = require("express");
router = express.Router()

const contactController = require("../controllers/contacts")

router.get("/", contactController.getAllContacts)

router.get("/:contactId", contactController.getContactFromId)

router.post("/", contactController.createContact)

router.put("/:contactId", contactController.updateContact)

router.post("/:contactId", contactController.deleteContact)

module.exports = router