const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../utils/errorHandler');

async function updateInfraestructura(req, reply) {
  try {
    const { plantelId, infraestructuraId } = req.params;
    const { ...data } = req.body;

    Logger.info('[api/higiene/create]: updating infraestructura');
    const infraestructura = await this.solicitudServices.updateInfraestructura({
      plantelId,
      infraestructuraId,
    }, data);

    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: infraestructura });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = updateInfraestructura;
