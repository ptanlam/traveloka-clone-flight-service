import Airport from '../models/Airport';

// [GET]: api/v1/airports/:_id?
async function getAirports(req, res, next) {
  try {
    const { _id } = req.params;
    if (_id) {
      const airport = await Airport.findById(_id);
      return res.status(200).json({ airport });
    }
    const airports = await Airport.find();
    return res.status(200).json({ airports });
  } catch (error) {
    return next(error);
  }
}

// [POST]: api/v1/airports
async function postAirport(req, res, next) {
  try {
    const newAirport = new Airport({ ...req.body });
    await newAirport.save();

    return res
      .status(201)
      .send(`Posted airport: ${newAirport.airportName} sucessfully.`);
  } catch (error) {
    return next(error);
  }
}

// [PATCH]: api/v1/airports/id
async function patchAirport(req, res, next) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send('Can not get id');

  try {
    const airport = await Airport.findById(_id);
    if (!airport) return res.status(404).send(`Can not update the id: ${_id}!`);
    await airport.update({ ...req.body });
    return res.status(200).send(`Updated record with the id: ${_id}`);
  } catch (error) {
    return next(error);
  }
}

// [DELETE]: api/v1/airports/id
async function deleteAirport(req, res, next) {
  const { _id } = req.params;
  if (!_id) return res.status(404).send('Can not get id');

  try {
    const airport = await Airport.findById(_id);
    if (!airport) {
      return res.status(404).send(`Can not find record with id ${_id}`);
    }

    await airport.deleteOne();
    return res.status(200).send(`Deleted the record with id ${_id}`);
  } catch (error) {
    return next(error);
  }
}

export default {
  getAirports,
  postAirport,
  patchAirport,
  deleteAirport,
};
