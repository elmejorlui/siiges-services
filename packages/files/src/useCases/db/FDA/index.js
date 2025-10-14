const { fdaAdapter } = require('../../../adapters/db');
const phpAdapter = require('../../../adapters/php/helpers');
const pdfAdapter = require('../../../utils/pdfs');

const { buildFileFDA01 } = require('./build.FDA01.db.use-cases');
const { buildFileFDA02 } = require('./build.FDA02.db.use-cases');
const { buildFileFDA03 } = require('./build.FDA03.db.use-cases');
const { buildFileFDA04 } = require('./build.FDA04.db.use-cases');
const { buildFileFDA06 } = require('./build.FDA06.db.use-cases');
const { findFileFDA02 } = require('./find-one.FDA02.db.use-cases');
const { findFileFDA03 } = require('./find-one.FDA03.db.use-cases');
const { findFileFDA04 } = require('./find-one.FDA04.db.use-cases');
const { findFileFDA05 } = require('./find-one.FDA05.db.use-cases');
const { findFileFDA06 } = require('./find-one.FDA06.db.use-cases');

module.exports = {
  buildFileFDA01: buildFileFDA01(
    fdaAdapter.findOneSolicitudProgramaQuery,
    phpAdapter.createPhpFile,
  ),
  buildFileFDA02: buildFileFDA02(
    fdaAdapter.findOneSolicitudProgramaQuery,
    phpAdapter.createPhpFile,
  ),
  buildFileFDA03: buildFileFDA03(
    fdaAdapter.findOneSolicitudProgramaQuery,
    phpAdapter.createPhpFile,
  ),
  buildFileFDA04: buildFileFDA04(
    fdaAdapter.findOneSolicitudProgramaQuery,
    fdaAdapter.findAllInfraestructura,
    fdaAdapter.findAllInfraestructuraPrograma,
    fdaAdapter.findOneInfraestructura,
    fdaAdapter.findPlantelHigieneByPlantelId,
    fdaAdapter.findSaludInstitucionesByPlantelId,
    phpAdapter.createPhpFile,
  ),
  buildFileFDA06: buildFileFDA06(
    fdaAdapter.findOneSolicitudProgramaQuery,
    phpAdapter.createPhpFile,
  ),
  findFileFDA02: findFileFDA02(
    fdaAdapter.findOneSolicitudProgramaQuery,
    pdfAdapter.GenerarFDA02,
  ),
  findFileFDA03: findFileFDA03(
    fdaAdapter.findOneSolicitudProgramaQuery,
    pdfAdapter.GenerarFDA03,
  ),
  findFileFDA04: findFileFDA04(
    fdaAdapter.findOneSolicitudProgramaQuery,
    pdfAdapter.GenerarFDA04,
  ),
  findFileFDA05: findFileFDA05(
    fdaAdapter.findOneSolicitudProgramaQuery,
    pdfAdapter.GenerarFDA05,
  ),
  findFileFDA06: findFileFDA06(
    fdaAdapter.findOneSolicitudProgramaQuery,
    pdfAdapter.GenerarFDA06,
  ),
};
