import Aircraft from '../models/Aircraft';

// [GET]: api/v1/Aircrafts/id
async function getAircrafts(req, res) {
  try {
    const { _id } = req.params;
    if (_id) {
      const Aircraft = await Aircraft.findById(_id);
      return res.status(200).json({ Aircraft });
    }
    const Aircraft = await Aircraft.find();
    return res.status(200).json({ Aircraft });
  } catch (error) {
    return next(error);
  }
}

// [POST]: api/v1/Aircrafts
async function postAircraft(req, res) {
  try {
    const newAircraft = new Aircraft({ ...req.body });
    await newAircraft.save();
    return res.status(201).send(`Posted Aircraft: ${newAircraft.AircraftName}`);
  } catch (error) {
    return next(error);
  }
}
// [PATCH]: api/v1/Aircrafts/id
async function patchAircraft(req, res) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const Aircraft = await Aircraft.findByIdAndUpdate(_id, { ...req.body });
    if (!Aircraft) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    return res.status(200).send(`Updated record with id ${_id}`);
  } catch (error) {
    return next(error);
  }
}

// [DELETE]: api/v1/Aircrafts/id
async function deleteAircraft(req, res) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const Aircraft = await Aircraft.findById(_id);
    if (!Aircraft) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    await Aircraft.deleteOne();
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
