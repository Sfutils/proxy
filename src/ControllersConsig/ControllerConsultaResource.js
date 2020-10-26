const axios = require('axios');
const config = require('../config/index');
const uuid = require('../utils/index');

getResource =  async (req, res) => {

 
  const headers = {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Key Y29udHJhdGFjYW9jb25zaWduYWRvYmV0YTpXdFRLajN4NjBIYVdDbGQyTzRiQQ=='
       }}

   const payload = {  
    "id": uuid.uuid(),
    "method": "get",
    "uri": `/resources/${req.params.id}`
  }
  
    const response = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload,headers);
    const jsonText = JSON.stringify (response.data);
    const responseObject = JSON.parse (jsonText);


    res.status(200).send(responseObject.resource);
     
 },

 updateResource = async (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Key Y29udHJhdGFjYW9jb25zaWduYWRvYmV0YTpXdFRLajN4NjBIYVdDbGQyTzRiQQ=='
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
 }
module.exports = {
  getResource,
  updateResource
}