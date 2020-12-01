const axios = require('axios');
const config = require('../../config/index');
const uuid = require('../../utils/index');

getResource =  async (req, res) => {

 
  const headers = {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Key c2FmcmFwcm9kY29uc2lnYmlvd2E6T1Z1WU1zQlN6YjgyRTJIblJOYkE='
       }}

   const payload = {  
    "id": uuid.uuid(),
    "method": "get",
    "uri": `/resources/${req.params.id}`
  }
  
    const response = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload,headers);
    const jsonText = JSON.stringify (response.data);
    const responseObject = JSON.parse (jsonText);


    

    if(response.data.reason){

      res.status(404).send({msg:'recurso não encontrado'});
    }
    res.status(200).send(responseObject.resource);
 },

 updateResource = async (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Key c2FmcmFwcm9kY29uc2lnYmlvd2E6T1Z1WU1zQlN6YjgyRTJIblJOYkE='
    }}

const payload = {  
 "id": uuid.uuid(),
 "method": "get",
 "uri": `/resources/${req.params.id}`
}

 const response = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload,headers);


      response.data.resource['Template'] = req.params.template;


  const payload2 = {

    "id": uuid.uuid(),
    "method": "set",
    "uri":  `/resources/${req.params.id}`,
       "type": "application/json",
       "resource": response.data.resource

  }

       const response2 = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload2,headers);
       const response3 = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload,headers);

       
       const jsonText = JSON.stringify (response3.data);
       const responseObject = JSON.parse (jsonText);
  

    res.status(200).json(responseObject.resource);
 },

 criarProtocolo = async (req, res) => {

    console.log(req.headers['authorization']);
    console.log(req.body);
 
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
          'Authorization': req.headers['authorization']
        }}
      
        axios.
        post(`https://api.safra.com.br/vendas-servicos/atendimentos-clientes/v1/protocolos`, req.body, headers)
        .then((resp) => {
        const jsonText = JSON.stringify(resp.data);
        const responseObject = JSON.parse(jsonText);
        console.log(responseObject);
        res.json(responseObject);

      }).catch((err) => {
      
        console.log(err.response.data)
      
      res.status(err.response.status).json({error: err.response.data})
    });

 },

 criarOcorrencia = async (req, res) => {

   console.log(req.headers['authorization']);
   console.log(req.body);

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Authorization': req.headers['authorization']
    }}

       axios.
       post(`https://api.safra.com.br/vendas-servicos/atendimentos-clientes/v1/ocorrencias/1`, req.body, headers)
       .then((resp) => {
       const jsonText = JSON.stringify(resp.data);
       const responseObject = JSON.parse(jsonText);

       console.log(responseObject);
       res.json(responseObject);

     }).catch((err) => {
       console.log(err.response.data)
     res.status(err.response.status).json({error: err.response.data})
   });


 }
 logsBlip = async (req, res) => {

  console.log(req.body);

  res.json({"ok":"ok"});

}



module.exports = {
  getResource,
  updateResource,
  criarProtocolo,
  criarOcorrencia,
  logsBlip
}