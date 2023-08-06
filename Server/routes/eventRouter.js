const Router = require("express");
const {createEvent, getEvent, getEvents, editEvent, deleteEvent} = require('../controllers/eventsController.js')

const router = new Router();


router.post("/events", createEvent);
router.get("/events", getEvents);
router.get("/events/:id", getEvent);
router.put("/events", editEvent);
router.delete("/events/:id", deleteEvent);


module.exports = router;