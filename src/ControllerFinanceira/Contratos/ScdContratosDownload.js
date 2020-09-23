const axios = require('axios');
const config = require('../../config/index');

ScdContratosDownload =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
    var teste = `${config.financeira.baseUrl}/api/v1/scd/Contratos/${req.params.idProposta}/${req.params.idCliente}/CopiaContrato/Download`;
    axios.
    get(`${config.financeira.baseUrl}/api/v1/scd/Contratos/${req.params.idProposta}/${req.params.idCliente}/CopiaContrato/Download`, headers)
    .then((resp) => {
    const jsonText = JSON.stringify(resp.data);
    const responseObject = JSON.parse(jsonText);
    res.json(responseObject);

  }).catch((err) => {
  
   res.status(err.response.status).json({error: err.response.data})
 });

}
module.exports = {
  ScdContratosDownload
}