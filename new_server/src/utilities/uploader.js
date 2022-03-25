const multer = require("multer");

const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB
  }
});

module.exports = uploader;
