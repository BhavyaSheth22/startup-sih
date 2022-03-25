const {Workshop} = require("../models/Workshop");

exports.createWorkshop = async (req, res, next) => {
    try {
      const workshopData = req.body;
      const createWorkshopData = await Workshop.create({ ...workshopData })

      res.status(201).json({ data: createWorkshopData, message: 'created' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

exports.getAllWorkshops = async (req, res, next) => {
    try{
        const workshops = await Workshop.find().populate('comments');
        console.log(workshops);
        res.status(200).json({data: posts, message: 'all workshops'});
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}