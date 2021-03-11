import xlsx from 'xlsx';
import FlightSchedule from '../models/FlightSchedule';

// [GET] /api/v1/flightSchedules
async function getFlightSchedules(req, res, next) {
  const { _id } = req.params;

  try {
    if (!_id) {
      const flightSchedule = FlightSchedule.find();
      return res.status(200).send('Get records').json({ flightSchedule });
    }
    const flightSchedule = FlightSchedule.findById(_id);
    return res.status(200).send('Get records').json({ flightSchedule });
  } catch (error) {
    return next(error);
  }
}

// [POST] /api/v1/flightSchedules
async function postFlightSchedule(req, res, next) {
  // Convert incoming excel file to json
  const wb = xlsx.read(req.file.buffer, { cellDates: true });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const flights = xlsx.utils.sheet_to_json(ws);

  try {
    flights.forEach(async (flight) => {
      const newFlightSchedule = new FlightSchedule({ ...flight });
      await newFlightSchedule.save();
    });

    return res.status(200).send('Thiết lập lịch trình bay thành công!');
  } catch (error) {
    return next(error);
  }
}

// [PATCH] api/v1/flightSchedules/id
async function patchFlightSchedule(req, res, next) {
  const { _id } = req.params;
  if (!_id) {
    return res.status(404).send(`Không tìm thấy lịch trình bay có mã ${_id}`);
  }

  try {
    const updatedRecord = { ...req.body };
    if (updatedRecord) {
      updatedRecord.departureAt = new Date(updatedRecord.departureAt * 1000);
      updatedRecord.arrivalAt = new Date(updatedRecord.arrivalAt * 1000);
    }
    await FlightSchedule.findByIdAndUpdate(_id, {
      ...updatedRecord,
    });

    return res
      .status(200)
      .send(`Đã cập nhật thành công lịch trình bay với mã ${_id}`);
  } catch (error) {
    return next(error);
  }
}

// [DELETE] api/v1/flightSchedules/id
async function deleteFlightSchedule(req, res, next) {
  const { _id } = req.params;
  if (!_id) {
    return res.status(404).send('Vui lòng kiểm tra lại mã lịch trình bay');
  }

  try {
    const flightSchedule = await FlightSchedule.findById(_id);
    if (!flightSchedule) {
      res.status(404).send(`Không tìm thấy lịch trình có mã ${_id}`);
    }

    await flightSchedule.deleteOne();
    return res.status(200).send(`Đã xoá lịch bay với mã ${_id}`);
  } catch (error) {
    return next(error);
  }
}

export default {
  getFlightSchedules,
  postFlightSchedule,
  patchFlightSchedule,
  deleteFlightSchedule,
};
