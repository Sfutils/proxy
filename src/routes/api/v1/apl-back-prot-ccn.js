const express = require('express');
const routes = express.Router();

const indexProtocolo  = require('../../../BPM/Protocolo/index');

routes
.post('/apl-back-prot-ccn/protocolos', indexProtocolo.CriarProtocolo.CriarProtocolo);

routes
.post('/apl-back-prot-ccn/ocorrencias/', indexProtocolo.CriarOcorrencia.CriarOcorrencia);

routes
.get('/apl-back-prot-ccn/protocolos/idProtocolo/:idProtocolo', indexProtocolo.ConsultarProtocoloPorId.ConsultarProtocoloPorId);


module.exports = routes;