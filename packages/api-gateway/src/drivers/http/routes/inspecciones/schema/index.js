const findAllInspeccionPreguntasSchema = require('./find-all.inspeccion-pregunta.schema');
const createInspeccionSchema = require('./create.inspeccion.schema');
const createInspeccionRespuestasSchema = require('./create.inspeccion-respuestas.schema');
const deleteInspeccionSchema = require('./delete.inspeccion.schema');

module.exports = {
  createInspeccionSchema,
  findAllInspeccionPreguntasSchema,
  createInspeccionRespuestasSchema,
  deleteInspeccionSchema,
};
