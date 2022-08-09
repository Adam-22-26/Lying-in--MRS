module.exports = (multer, DatauriParser, path) => {
  const storage = multer.memoryStorage();
  const multerUploads = multer({ storage }).single("file");

  /**
   * @description This function converts the buffer to data url
   * @param {Object} req containing the field object
   * @returns {String} The data url from the string buffer
   */
  // const dUri = new Datauri();
  const dUri = new DatauriParser();
  const dataUri = (req)=>{
   return dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
  }
  return { multerUploads, dataUri};
};
