const axios = require('axios');
const config = require('../../config/index');

extratoEpf =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
  
    axios.
    get(`${config.financeira.baseUrl}/api/v1/epf/Contratos/${req.params.idContrato}/Extrato/Download`, headers)
    .then((resp) => {
    const jsonText = JSON.stringify(resp.data);
    const responseObject = JSON.parse(jsonText);
    res.json(responseObject);

  }).catch((err) => {
  
   res.status(err.response.status).json({error: err.response.data})
 });

}
module.exports = {
  extratoEpf
}