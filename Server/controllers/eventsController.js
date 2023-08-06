const Event = require('../models/event.js')

module.exports.createEvent = async (req, res) => {
	try {
		const { name, date } = req.body;
		const event = await Event.create({
            name: name,
            date: new Date(date),
        });
		return res.json(event);
	} catch (e) {
		res.status(500).json(e);
	}
}

module.exports.getEvent = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: "Id not found" });
		}
		const event = await Event.findOne({
            where: {id: id}
        })
		return res.json(event);
	} catch (e) {
		res.status(500).json(e);
	}
}

module.exports.getEvents = async (req, res) => {
	try {
		const events = await Event.findAll();
		return res.json(events);
	} catch (e) {
		res.status(500).json(e);
	}
}

module.exports.editEvent = async (req, res) => {
	try {
		const {name, date, id} = req.body;
		const updatedEvent = await Event.update({
            name: name,
            date: new Date(date)
          }, {
            where: {
              id: id
            }
        })
		return res.json(updatedEvent);
	} catch (e) {
		res.status(500).json(e);
	}
}

module.exports.deleteEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await Event.destroy({
            where: {
                id: id
            }
          })
		return res.json(event);
	} catch (e) {
		res.status(500).json(e);
	}
}