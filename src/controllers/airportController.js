import Airport from "../models/Airport";

// [GET]: api/v1/airports/:_id?
async function getAirports(req, res) {
  try {
    const { _id } = req.params;
    if (_id) {
      const airport = await Airport.findById(_id);
      return res.status(200).json({ airport });
    }
    const airports = await Airport.find();
    return res.status(200).json({ airports });
  } catch (error) {
    return res.status(500).send(`Errors occurred: ${error.message}`);
  }
}

// [POST]: api/v1/airports
async function postAirport(req, res) {
  try {
    const newAirport = new Airport({ ...req.body });
    await newAirport.save();
    return res
      .status(201)
      .send(`Posted airport: ${newAirport.airportName} sucessfully.`);
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

// [PATCH]: api/v1/airports/id
async function patchAirport(req, res) {
  const { _id } = req.params;

  if (!_id) return res.status(404).send("Can not get id");
  try {
    const airport = await Airport.findByIdAndUpdate(_id, { ...req.body });
    if (!airport) return res.status(404).send(`Can not update the id: ${_id}!`);
    return res.status(200).send(`Updated record with the id: ${_id}`);
  } catch (err) {
    return res
      .status(500)
      .send(`Some errors occurred while updating: ${err.message}`);
  }
}

// [DELETE]: api/v1/airports/id
async function deleteAirport(req, res) {
  const { _id } = req.params;

  if (!_id) return res.status(404).send("Can not get id");

  try {
    const airport = await Airport.findById(_id);
    if (!airport)
      return res.status(404).send(`Can not find record with id ${_id}`);
    await airport.deleteOne();
    return res.status(200).send(`Deleted the record with id ${_id}`);
  } catch (err) {
    return res
      .status(500)
      .send(`Some errors occurred while deleting: ${err.message}`);
  }
}

export default { getAirports, postAirport, patchAirport, deleteAirport };
