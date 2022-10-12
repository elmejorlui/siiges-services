const { createIfNotExist } = require('./create.files.adapters');
const createName = require('./create-name.files.adapters');
const unlinkIfNameIsDefined = require('./unlink.files.adapters.fs');

module.exports = {
  createIfNotExist,
  createName,
  unlinkIfNameIsDefined,
};
