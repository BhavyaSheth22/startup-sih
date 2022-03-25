const schemeModel = require("../models/Schemes");
const auth = require("../utilities/auth");

exports.getSchemes = async (req, res) => {
  try {
    let Scheme = await schemeModel.find();
    if (!Scheme)
      return res.status(404).json({ error: "No scheme" });

    return res.status(200).json({
     data: Scheme
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};


