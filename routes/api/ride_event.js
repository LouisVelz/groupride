const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const RideEvent = require('../../models/RideEvent');
const validateRideEventInput = require('../../validation/ride_events');

router.get('/', (req, res) => {
    RideEvent.find()
        .sort({ date: -1 })
        .then(rides => res.json(rides))
        .catch(err => res.status(404).json({ noridesfound: 'No rides found' }));
});

router.get('/user/:user_id', (req, res) => {
    RideEvent.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(rides => res.json(rides))
        .catch(err =>
            res.status(404).json({ noridesfound: 'No rides found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    RideEvent.findById(req.params.id)
        .then(ride => res.json(ride))
        .catch(err =>
            res.status(404).json({ noridefound: 'No ride found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateRideEventInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newRideEvent = new RideEvent({
            creator: req.user.id,
            title: req.body.title,
            description: req.body.description,
            destination: req.body.destination,
            meetup_location: req.body.meetup_location,
            meetup_time: req.body.meetup_time,
            purpose: req.body.purpose
        });

        newRideEvent.save().then(ride => res.json(ride));
    }
);

module.exports = router;