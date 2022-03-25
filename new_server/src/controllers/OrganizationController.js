// const Organization = require("../models/Organization");
// const Crowdfunding = require("../models/Crowdfunding");

// const auth = require("../utilities/auth");
// const GeocoderArcGIS = require("geocoder-arcgis");

// const geocoder = new GeocoderArcGIS();


// //Register Organization
// exports.registerOrganization = async (req, res) => {
//   try {
//     const { name, email, address, password } = req.body;

//     let loc = [];

//     const result = await geocoder.findAddressCandidates(address, {});
//     loc.push(result.candidates[0].location.x);
//     loc.push(result.candidates[0].location.y);
//     let location = { type: "Point", coordinates: loc };

//     const newOrganization = await Organization.create({
//       name,
//       email,
//       password,
//       address,
//       location
//     });

//     const token = auth.signToken(newOrganization._id);
//     res.status(201).json({
//       status: "success",
//       token,
//       data: {
//         userID: newOrganization._id
//       }
//     });
//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// };

// //Organization Login
// exports.loginOrganization = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const organization = await Organization.findOne({ email }).select(
//       "+password"
//     );

//     if (
//       !organization ||
//       !(await organization.correctPassword(password, organization.password))
//     ) {
//       return res.status(401).json({ error: "Incorrect email or password" });
//     }

//     const token = auth.signToken(Organization._id);
//     res.status(200).json({
//       status: "success",
//       token,
//       data: {
//         userID: organization._id
//       }
//     });
//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// };

// exports.getOrganization = async (req, res) => {
//   try {
//     let Organization = await Organization.findById(req.params.OrganizationID);
//     if (!Organization)
//       return res.status(404).json({ error: "Invalid Organization ID" });

//     return res.status(200).json({
//       name: Organization.name,
//       OrganizationID: Organization.OrganizationID,
//       email: Organization.email,
//       department: Organization.department,
//       description: Organization.description,
//       position: Organization.position
//     });
//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// };


