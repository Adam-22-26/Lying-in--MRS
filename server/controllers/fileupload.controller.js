const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");

const { dataUri } = require("../config/multer.config")(
  multer,
  DatauriParser,
  path
);

module.exports = (req, res) => {
  // cloudinary
  if (req.file) {
    const file = dataUri(req).content;
    cloudinary.uploader.upload(file).then((result) => {
      if (result.url) {
        res
          .status(201)
          .send({
            success: true,
            message: "FILE SUCCESSFULLY UPLOADED",
            imgUrl: result.url,
          });
      } else {
        res
          .status(201)
          .send({
            success: false,
            message: "FILE CANNOT UPLOAD PLEAS TRY AGAIN.",
            imgUrl: null,
          });
      }
    });
  }
  // console.log("fileeeeeeeee",file)
  else {
    res
      .status(201)
      .send({ success: false, imgUrl: null, message: "NO FILE FOUND" });
  }
};
