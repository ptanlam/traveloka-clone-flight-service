import Aircraft from '../models/Aircarft';

// [GET]: api/v1/aircrafts/id
async function getAircrafts(req, res, next) {
  try {
    const { _id } = req.params;
    if (_id) {
      const aircraft = await Aircraft.findById(_id);
      return res.status(200).json({ aircraft });
    }
    const aircraft = await Aircraft.find();
    return res.status(200).json({ aircraft });
  } catch (error) {
    return next(error);
  }
}

// [POST]: api/v1/aircrafts
async function postAircraft(req, res, next) {
  try {
    const newAircraft = new Aircraft({ ...req.body });
    await newAircraft.save();
    return res.status(201).send(`Posted Aircraft: ${newAircraft.AircraftName}`);
  } catch (error) {
    return next(error);
  }
}
// [PATCH]: api/v1/aircrafts/id
async function patchAircraft(req, res, next) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const aircraft = await Aircraft.findById(_id);
    if (!aircraft) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    await aircraft.update({ ...req.body });
    return res.status(200).send(`Updated record with id ${_id}`);
  } catch (error) {
    return next(error);
  }
}

// [DELETE]: api/v1/aircrafts/id
async function deleteAircraft(req, res, next) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const aircraft = await Aircraft.findById(_id);
    if (!Aircraft) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    await aircraft.deleteOne();
    return res.status(200).send(`Deleted the record with id ${_id}`);
  } catch (error) {
    return next(error);
  }
}

export default {
  getAircrafts,
  postAircraft,
  patchAircraft,
  deleteAircraft,
};
