import Airline from '../models/Airline';

// [GET]: api/v1/airlines/id
async function getAirlines(req, res) {
  try {
    const { _id } = req.params;
    if (_id) {
      const airline = await Airline.findById(_id);
      return res.status(200).json({ airline });
    }
    const airline = await Airline.find();
    return res.status(200).json({ airline });
  } catch (error) {
    return res.status(500).send(`Error occurred: ${error.message}`);
  }
}

// [POST]: api/v1/airlines
async function postAirline(req, res) {
  try {
    const newAirline = new Airline({ ...req.body });
    await newAirline.save();
    return res.status(201).send(`Posted airline: ${newAirline.airlineName}`);
  } catch (error) {
    return res.status(500).send(`Some error occurred: ${error.message}`);
  }
}
// [PATCH]: api/v1/airlines/id
async function patchAirline(req, res) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const airline = await Airline.findByIdAndUpdate(_id, { ...req.body });
    if (!airline) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    return res.status(200).send(`Updated record with id ${_id}`);
  } catch (error) {
    return res
      .status(500)
      .send(`Some error occurred while updating: ${error.message}`);
  }
}

// [DELETE]: api/v1/airlines/id
async function deleteAirline(req, res) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send(`Can not find record with id: ${_id}`);
  try {
    const airline = await Airline.findById(_id);
    if (!airline) {
      return res.status(404).send(`Can not find record with id: ${_id}`);
    }
    await airline.deleteOne();
    return res.status(200).send(`Deleted the record with id ${_id}`);
  } catch (error) {
    return res
      .status(500)
      .send(`Some error occurred while deleting: ${error.message}`);
  }
}

export default {
  getAirlines,
  postAirline,
  patchAirline,
  deleteAirline,
};
