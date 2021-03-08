import mongoose from 'mongoose';

const { Schema, SchemaTypes } = mongoose;

const flightScheduleSchema = new Schema(
    {
        flightId: {
            type: String,
            maxlength: 20,
            unique: true,
            required: true,
        },
        airlineCode: {
            type: [
                {
                    airlineName: {type:String, require: true},
                    airlineCountry: {type:String, require: true},
                },
            ],
        },
        aircraftTypeCode: {
            type: [
                {
                    airlineTypeName: {type:String, require: true},
                    airlineTypeCapacity: {type:String, require: true},
                },
            ],
        },
        firstAirportCode: {
            type : Schema.Types.ObjectId, 
            ref: 'Airport',
        },
        finalAirportCode: {
            type : Schema.Types.ObjectId, 
            ref: 'Airport',
        },
        departureAt: Date,
        arrivalAt: Date,
    },
    {
        timestamps: true,
    },
);

const FlightSchedule = mongoose.model('flight_schedule', hotelSchema);

export default FlightSchedule;