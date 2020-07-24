const mongoose = require(`mongoose`)

const pointSchema = new mongoose.Schema({
    coords: {
        accuracy: Number,
        altitude: Number,
        heading: Number,
        latitude: Number,
        longitude: Number,
        speed: Number,
    },
    timestamp: Number,
})
const trackSchema = new mongoose.Schema({
    locations: [pointSchema],
    name: {
        default: ``,
        type: String,
    },
    userId: {
        ref: `User`,
        type: mongoose.Schema.Types.ObjectId,
    },
})

mongoose.model(`Track`, trackSchema)
