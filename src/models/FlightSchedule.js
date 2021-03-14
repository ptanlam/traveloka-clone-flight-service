import mongoose from 'mongoose';

const { Schema, SchemaTypes } = mongoose;

const flightScheduleSchema = new Schema(
  {
    _id: {
      type: String,
      maxlength: 20,
    },
    // 2 trường hold id thông tin về hãng và máy bay.
    airlineId: { type: String, maxlength: 20, require: true }, // thêm logo
    // chuyển qua ref , lưu id mongo?
    aircraftTypeName: { type: String, maxlength: 20, require: true }, // VD boeing 700, airbus
    aircraftTypeCapacity: { type: Number, require: true }, // máy bay chỉ chứa được max là nhiêu đây
    // thêm trường giá từng ghế [#1]
    firstAirportCode: {
      // lưu id mongo
      type: Schema.Types.ObjectId,
      ref: 'airport',
    },
    finalAirportCode: {
      type: Schema.Types.ObjectId,
      ref: 'airport',
    },
    transitAirportCode: {
      type: [Schema.Types.ObjectId],
      ref: 'airport',
    },

    departureAt: { type: Date, required: true },
    arrivalAt: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const FlightSchedule = mongoose.model('flight_schedule', flightScheduleSchema);

export default FlightSchedule;
