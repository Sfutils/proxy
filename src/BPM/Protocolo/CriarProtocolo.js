const axios = require('axios');
const config = require('../../config/index');

CriarProtocolo =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
  
    console.log(headers)

    const response = {
      "data": {
          "id": 20200930000045,
          "idOrigem": 3,
          "idSegmento": 5,
          "cpfCnpj": "02185380000101",
          "canal": 1,
          "status": 1,
          "dataInclusao": "2020-09-30T18:55:57.577",
          "usuarioInclusao": "USR_SPD",
          "dataUltimaAtualizacao": "2020-09-30T18:55:57.577",
          "usuarioUltimaAtualizacao": "USR_SPD",
          "dataEncerramento": null,
          "usuarioEncerramento": null,
          "origemDesc": null,
          "canalDesc": null,
          "statusDesc": null,
          "origemExterna": null,
          "dataOrigemExterna": null,
          "nomeCliente": null,
          "ocorrencias": [],
          "origem": {
              "id": 0,
              "descricao": null,
              "situacaoId": null,
              "usuarioIdInclusao": null,
              "dataHoraInclusao": "0001-01-01T00:00:00",
              "usuarioIdAtualizao": null,
              "dataHoraAtualizacao": "0001-01-01T00:00:00"
          },
          "segmento": {
              "id": 0,
              "descricao": null,
              "situacao": null,
              "usuarioInclusao": null,
              "dataHoraInclusao": "0001-01-01T00:00:00",
              "usuarioAtualizacao": null,
              "dataHoraAtualizacao": "0001-01-01T00:00:00"
          },
          "statusProcessamento": {
              "id": 0,
              "descricao": null,
              "situacao": "\u0000",
              "usuarioInclusao": null,
              "dataHoraInclusao": "0001-01-01T00:00:00",
              "usuarioAtualizacao": null,
              "dataHoraAtualizacao": "0001-01-01T00:00:00"
          },
          "contato": null,
          "tipoContatos": null,
          "autenticacao": null
      }
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
  CriarProtocolo
}