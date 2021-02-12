const axios = require('axios');
const config = require('../../config/index');

getContratosQuantidade =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}

  
    axios.get(`${config.contratacao.baseUrl}/api/v1/Contratos/${req.params.cpf}/${req.params.matricula}/Quantidade`, headers).then((resp) => {
      
    const jsonText = JSON.stringify(resp.data);
    const responseObject = JSON.parse(jsonText);
    res.json(responseObject);

  }).catch((err) => {
  
   res.status(err.response.status).json({error: err.response.data})
 });

}
module.exports = {
  getContratosQuantidade
}