import FlightSchedule from '../models/FlightSchedule';

// [GET] /api/v1/flightschedules
async function getFlightSchedules(req, res, next) {
  const { _id } = req.params;

  try {
    if (!_id) {
      const flightSchedule = FlightSchedule.find();
      return res.status(200).send(`Get records`).json({ flightSchedule });
    }
    const flightSchedule = FlightSchedule.findById(_id);
    return res.status(200).send(`Get records`).json({ flightSchedule });
  } catch (error) {
    return res
      .status(404)
      .send(`Không tìm thấy dữ liệu. Errors: ${error.message}}`);
  }
}

// [POST] /api/v1/flightschedules
async function postFlightSchedule(req, res) {
  const newRecord = { ...req.body };
  newRecord.departureAt = new Date(newRecord.departureAt * 1000);
  newRecord.arrivalAt = new Date(newRecord.arrivalAt * 1000);
  try {
    const newFlightSchedule = new FlightSchedule({ ...newRecord });
    await newFlightSchedule.save();
    return res
      .status(200)
      .send(
        `Thiết lập lịch trình bay mã ${newFlightSchedule.flightId} thành công!`
      );
  } catch (error) {
    return res
      .status(500)
      .send(`Có lỗi xảy ra vui lòng nhập lại lịch trình bay!`);
  }
}

// [PATCH] api/v1/flightschedules/id
async function patchFlightSchedule(req, res) {
  const { _id } = req.params;

  console.log(_id);

  if (!_id)
    return res.status(404).send(`Không tìm thấy lịch trình bay có mã ${_id}`);
  try {
    const updatedRecord = { ...req.body };
    if (updatedRecord) {
      updatedRecord.departureAt = new Date(updatedRecord.departureAt * 1000);
      updatedRecord.arrivalAt = new Date(updatedRecord.arrivalAt * 1000);
    }
    const flightSchedule = await FlightSchedule.findByIdAndUpdate(_id, {
      ...updatedRecord,
    });
    return res
      .status(200)
      .send(`Đã cập nhật thành công lịch trình bay với mã ${_id}`);
  } catch (err) {
    return res
      .status(500)
      .send(`Some errors occurred while updating: ${err.message}`);
  }
}

// [DELETE] api/v1/flightschedules/id
async function deleteFlightSchedule(req, res) {
  const { _id } = req.params;

  if (!_id)
    return res.status(404).send(`Vui lòng kiểm tra lại mã lịch trình bay`);

  try {
    const flightSchedule = await FlightSchedule.findById(_id);
    if (!flightSchedule)
      res.status(404).send(`Không tìm thấy lịch trình có mã ${_id}`);

    await flightSchedule.deleteOne();
    return res.status(200).send(`Đã xoá lịch bay với mã ${_id}`);
  } catch (err) {
    return res
      .status(500)
      .send(`Some errors occurred while deleting: ${err.message}`);
  }
}

export default {
  getFlightSchedules,
  postFlightSchedule,
  patchFlightSchedule,
  deleteFlightSchedule,
};
