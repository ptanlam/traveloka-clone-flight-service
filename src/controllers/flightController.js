import Airport from '../models/Airport';

async function getAirports (req, res) {
    try {
        const {_id} = req.params;
        if(_id) {
            const airport = await Airport.findById(_id);
            return res.status(200).json({ airport });
        }
        else {
            const airports = await Airport.find();
            return res.status(200).json({airports});
        }
    } catch (error) {
        return res.status(500).send(`Errors occurred: ${error.message}`);
    }
}

async function postAirport(req, res) {
    try {
        const newAirport = new Airport({...req.body});
        await newAirport.save();
        return res
            .status(201)
            .send(`Posted airport: ${newAirport.airportName} sucessfully.`);
    } catch (err) {
        return res.status(500).send(`Some errors occurred: ${err.message}`);
    }
}

async function patchAirport(req, res) {
    const {airportId} = req.params;

    if(!airportId) return res.status(404).send('Can not get id');
    try {
        const airport = await Airport.findByIdAndUpdate(airportId, {...req.body});
        if(!airport) return res.status(404).send(`Can not update the id: ${airportId}!`);
        return res.status(200).send(`Updated record with the id: ${airportId}`);  
    } catch (err) {
        return res.status(500).send(`Some errors occurred while updating: ${err.message}`);
    }
}

async function deleteAirport(req, res) { 
    const {airportId} = req.params

    if(!airportId) return res.status(404).send('Can not get id');

    try {
        const airport = await Airport.findById(airportId);
        if(!airport) return res.status(404).send(`Can not find record with id ${airportId}`);
        await airport.delete()
        return res.status(200).send(`Deleted the record with id ${airportId}`);
    } catch (err) {
        return res.status(500).send(`Some errors occurred while deleting: ${err.message}`);
    }
}

export default {getAirports, postAirport, patchAirport, deleteAirport};