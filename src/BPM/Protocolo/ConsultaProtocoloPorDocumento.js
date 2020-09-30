const axios = require('axios');
const config = require('../../config/index');

ConsultaProtocoloPorDocumento =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
  
    console.log(headers, req.params.documento, req.params.status, req.params.quantidade)

    const response = {
      "data": [
                {
                "id": 20200915000090,
                "cnpjCpf": "57484768000103",
                "status": "1",
                "descricaoStatusProtocolo": "ABERTO",
                "dataHoraInclusao": "2020-09-15T14:41:35.8",
                "dataHoraEncerramento": "0001-01-01T00:00:00"
                },
                {
                  "id": 20200915000091,
                  "cnpjCpf": "57484768000103",
                  "status": "3",
                  "descricaoStatusProtocolo": "ENCERRADO",
                  "dataHoraInclusao": "2020-09-15T14:41:35.8",
                  "dataHoraEncerramento": "0001-01-01T00:00:00"
                  },
                  {
                    "id": 20200915000092,
                    "cnpjCpf": "57484768000103",
                    "status": "2",
                    "descricaoStatusProtocolo": "EM ANDAMENTO",
                    "dataHoraInclusao": "2020-09-15T14:41:35.8",
                    "dataHoraEncerramento": "0001-01-01T00:00:00"
                    }
      ]
    
    } 
      

    try {
      
      const jsonText = JSON.stringify(response);
      const responseObject = JSON.parse(jsonText);
      res.json(responseObject);

    } catch (error) {
      
      res.status(err.response.status).json({error: error})
    }

  
 

}
module.exports = {
  ConsultaProtocoloPorDocumento
}