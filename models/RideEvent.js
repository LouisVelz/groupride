const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideEventSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    title: {
        type: String,
        required: true
    },
    meetup_location: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    meetup_time: {
        type: Date,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = RideEvent = mongoose.model('ride_event', RideEventSchema);