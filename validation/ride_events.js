const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRideEventInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : '';
    data.meetup_location = validText(data.meetup_location) ? data.meetup_location : '';
    data.destination = validText(data.destination) ? data.destination : '';

    if (!Validator.isLength(data.description, { min: 1, max: 140 })) {
        errors.description = 'Description must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    if (Validator.isEmpty(data.meetup_location)) {
        errors.meetup_location = 'Meetup location field is required';
    }

    if (Validator.isEmpty(data.destination)) {
        errors.destination = 'Destination field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};