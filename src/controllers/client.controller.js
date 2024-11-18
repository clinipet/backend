const Client = require("../models/client.model");
exports.totalClients = async(req, res) => {
    try {
        const result = await Client.count();
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getClientsHome = async(req, res) => {
    try {
        const result = await Client.getAllDetailed();
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getClientSimple = async(req, res) => {
    try{
        const result = await Client.getSimple();
        res.json(result.rows);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}