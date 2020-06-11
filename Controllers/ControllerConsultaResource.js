const axios = require('axios');
const config = require('../config/index');
const uuid = require('../utils/index');

getResource =  async (req, res) => {

 
  const headers = {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Key c2FmcmFwcm9kY29uc2lnYmlvd2E6T1Z1WU1zQlN6YjgyRTJIblJOYkE='
       }}

   const payload = {  
    "id": "3cbdd83c-d7ad-4d1e-886a-a0dffb96fd37",
    "method": "get",
    "uri": `/resources/${req.params.id}`
  }
  
    const response = await axios.post(`${config.baseUrl}/commands`, payload,headers);
    const jsonText = JSON.stringify (response.data);
    const responseObject = JSON.parse (jsonText);

    const pre = `<pre>${responseObject}</pre>`
    res.status(200).send(pre);
     
 }
module.exports = {
  getResource
}