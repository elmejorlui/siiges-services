const { infraestructura } = require('./properties/infraestructura');
const { tipoInstalacion } = require('./properties/tipoInstalacion');
const { asignaturaInfraestructura } = require('./properties/asignaturaInfraestructura');
const { infraestructuraPrograma } = require('./properties/infraestructuraPrograma');
const { responseProperties } = require('./properties/responseProperties');
const { asignatura } = require('../../asignaturas/schema/properties/asignatura');

const updateInfraestructuraSchema = {
  tags: ['Plantel'],
  description: 'Given an object with plantel infraestructura required data and the id of the infraestructura, then update a record of infraestrucutra-plantel in database.',
  params: {
    title: 'updateInfraestructuraSchema',
    type: 'object',
    properties: {
      plantelId: { type: 'integer' },
    },
    required: ['plantelId', 'infraestructuraId'],
  },
  body: {
    type: 'object',
    properties: {
      programaId: { type: 'integer' },
      nombre: { type: 'string' },
      ubicacion: { type: 'string' },
      capacidad: { type: 'integer' },
      metros: { type: 'string' },
      recursos: { type: 'string' },
      asignaturasInfraestructura: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
    required: ['programaId'],
  },
  response: {
    201: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            ...infraestructura,
            ...responseProperties,
            tipoInstalacion: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...tipoInstalacion,
                ...responseProperties,
              },
            },
            asignaturasInfraestructura: {
              type: 'array',
              items: {
                properties: {
                  id: { type: 'integer' },
                  ...asignaturaInfraestructura,
                  ...responseProperties,
                  asignatura: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      ...asignatura,
                      ...responseProperties,
                    },
                  },
                },
              },
            },
            infraestructuraPrograma: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...infraestructuraPrograma,
                ...responseProperties,
              },
            },
          },
        },
      },
    },
  },
};

module.exports = updateInfraestructuraSchema;
