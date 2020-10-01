const axios = require('axios');
const config = require('../../config/index');

ConsultarProtocoloPorId =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
  
    console.log(headers, req.params.idProtocolo)

    const response = {
      "data": [
        {
          "id": 20200915000090,
          "cpfCnpj": "02185380000101",
          "descOrigem": "AUTO SERVIÇO",
          "descSegmento": "OUTROS",
          "descCanal": "URA",
          "origemExterna": null,
          "dataOrigemExterna": null,
          "nomeCliente": null,
          "ocorrencias": [
              {
                  "idOcorrencia": 2021,
                  "ec": 0,
                  "descTipo": "SOLICITAÇÃO",
                  "descMotivo": "CADASTRO",
                  "descSubMotivo": "ALTERAÇÃO RAZÃO SOCIAL",
                  "descStatusOcorrencia": "ABERTO",
                  "comentarios": [],
                  "usuarioInclusao": "USR_SPD",
                  "dataHoraInclusao": "2020-09-15T18:41:30.82",
                  "usuarioAtualizacao": "USR_SPD",
                  "dataHoraAtualizacao": "2020-09-15T18:41:30.82",
                  "usuarioEncerramento": null,
                  "procedente": null,
                  "dataEncerramento": "0001-01-01T00:00:00"
              },
              {
                  "idOcorrencia": 2022,
                  "ec": 0,
                  "descTipo": "SOLICITAÇÃO",
                  "descMotivo": "CADASTRO",
                  "descSubMotivo": "ALTERAÇÃO DE ENDEREÇO",
                  "descStatusOcorrencia": "EM ANDAMENTO",
                  "comentarios": [],
                  "usuarioInclusao": "USR_SPD",
                  "dataHoraInclusao": "2020-09-15T18:42:43.253",
                  "usuarioAtualizacao": "USR_SPD",
                  "dataHoraAtualizacao": "2020-09-15T18:42:43.253",
                  "usuarioEncerramento": null,
                  "procedente": null,
                  "dataEncerramento": "0001-01-01T00:00:00"
              }
          ],
          "descStatusProtocolo": null,
          "dataInclusao": "2020-09-15T18:35:53.2",
          "usuarioInclusao": "USR_SPD",
          "dataUltimaAtualizacao": "2020-09-15T18:41:31.133",
          "usuarioUltimaAtualizacao": "USR_SPD",
          "dataEncerramento": null,
          "usuarioEncerramento": null,
          "autenticacao": null
      },
      {
        "id": 20200915000091,
        "cpfCnpj": "02185380000101",
        "descOrigem": "AUTO SERVIÇO",
        "descSegmento": "OUTROS",
        "descCanal": "URA",
        "origemExterna": null,
        "dataOrigemExterna": null,
        "nomeCliente": null,
        "ocorrencias": [
            {
                "idOcorrencia": 2021,
                "ec": 0,
                "descTipo": "SOLICITAÇÃO",
                "descMotivo": "CADASTRO",
                "descSubMotivo": "CODIGO DE BARRAS",
                "descStatusOcorrencia": "ENCERRADO",
                "comentarios": [],
                "usuarioInclusao": "USR_SPD",
                "dataHoraInclusao": "2020-09-15T18:41:30.82",
                "usuarioAtualizacao": "USR_SPD",
                "dataHoraAtualizacao": "2020-09-15T18:41:30.82",
                "usuarioEncerramento": null,
                "procedente": null,
                "dataEncerramento": "0001-01-01T00:00:00"
            },
            {
                "idOcorrencia": 2022,
                "ec": 0,
                "descTipo": "SOLICITAÇÃO",
                "descMotivo": "CADASTRO",
                "descSubMotivo": "ALTERAÇÃO RAZÃO SOCIAL",
                "descStatusOcorrencia": "ABERTO",
                "comentarios": [],
                "usuarioInclusao": "USR_SPD",
                "dataHoraInclusao": "2020-09-15T18:42:43.253",
                "usuarioAtualizacao": "USR_SPD",
                "dataHoraAtualizacao": "2020-09-15T18:42:43.253",
                "usuarioEncerramento": null,
                "procedente": null,
                "dataEncerramento": "0001-01-01T00:00:00"
            }
        ],
        "descStatusProtocolo": null,
        "dataInclusao": "2020-09-15T18:35:53.2",
        "usuarioInclusao": "USR_SPD",
        "dataUltimaAtualizacao": "2020-09-15T18:41:31.133",
        "usuarioUltimaAtualizacao": "USR_SPD",
        "dataEncerramento": null,
        "usuarioEncerramento": null,
        "autenticacao": null
    },
    {
      "id": 20200915000092,
      "cpfCnpj": "02185380000101",
      "descOrigem": "AUTO SERVIÇO",
      "descSegmento": "OUTROS",
      "descCanal": "URA",
      "origemExterna": null,
      "dataOrigemExterna": null,
      "nomeCliente": null,
      "ocorrencias": [
          {
              "idOcorrencia": 2021,
              "ec": 0,
              "descTipo": "SOLICITAÇÃO",
              "descMotivo": "CADASTRO",
              "descSubMotivo": "BAIXA NO GRAVAMES",
              "descStatusOcorrencia": "ABERTO",
              "comentarios": [],
              "usuarioInclusao": "USR_SPD",
              "dataHoraInclusao": "2020-09-15T18:41:30.82",
              "usuarioAtualizacao": "USR_SPD",
              "dataHoraAtualizacao": "2020-09-15T18:41:30.82",
              "usuarioEncerramento": null,
              "procedente": null,
              "dataEncerramento": "0001-01-01T00:00:00"
          },
          {
              "idOcorrencia": 2022,
              "ec": 0,
              "descTipo": "SOLICITAÇÃO",
              "descMotivo": "CADASTRO",
              "descSubMotivo": "ANTECIPAÇÃO DE FINAN",
              "descStatusOcorrencia": "ENCERRADO",
              "comentarios": [],
              "usuarioInclusao": "USR_SPD",
              "dataHoraInclusao": "2020-09-15T18:42:43.253",
              "usuarioAtualizacao": "USR_SPD",
              "dataHoraAtualizacao": "2020-09-15T18:42:43.253",
              "usuarioEncerramento": null,
              "procedente": null,
              "dataEncerramento": "0001-01-01T00:00:00"
          }
      ],
      "descStatusProtocolo": null,
      "dataInclusao": "2020-09-15T18:35:53.2",
      "usuarioInclusao": "USR_SPD",
      "dataUltimaAtualizacao": "2020-09-15T18:41:31.133",
      "usuarioUltimaAtualizacao": "USR_SPD",
      "dataEncerramento": null,
      "usuarioEncerramento": null,
      "autenticacao": null
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
  ConsultarProtocoloPorId
}