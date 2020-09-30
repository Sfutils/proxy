const axios = require('axios');
const config = require('../../config/index');

CriarOcorrencia =  (req, res) => {

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['authorization']
    }}
  
    console.log(headers)

    const response = {
      "data": {
          "id": 2292,
          "protocolo": {
              "id": 0,
              "idOrigem": 0,
              "idSegmento": 0,
              "cpfCnpj": null,
              "canal": 0,
              "status": 0,
              "dataInclusao": "0001-01-01T00:00:00",
              "usuarioInclusao": null,
              "dataUltimaAtualizacao": "0001-01-01T00:00:00",
              "usuarioUltimaAtualizacao": null,
              "dataEncerramento": null,
              "usuarioEncerramento": null,
              "origemDesc": null,
              "canalDesc": null,
              "statusDesc": null,
              "origemExterna": null,
              "dataOrigemExterna": null,
              "nomeCliente": null,
              "ocorrencias": null,
              "origem": null,
              "segmento": null,
              "statusProcessamento": null,
              "contato": null,
              "tipoContatos": null,
              "autenticacao": null
          },
          "protocoloAtendimentoId": 20200930000045,
          "tipo": {
              "id": 0,
              "descricao": null,
              "situacao": null,
              "usuarioInclusao": null,
              "dataHoraInclusao": "0001-01-01T00:00:00",
              "usuarioAtualizacao": null,
              "dataHoraAtualizacao": "0001-01-01T00:00:00"
          },
          "tipoId": 0,
          "motivo": {
              "id": 0,
              "descricao": null,
              "situacao": null,
              "usuarioInclusao": null,
              "dataHoraInclusao": "0001-01-01T00:00:00",
              "usuarioAtualizacao": null,
              "dataHoraAtualizacao": "0001-01-01T00:00:00"
          },
          "motivoId": 0,
          "subMotivo": {
              "id": 0,
              "motivoId": 0,
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
          "subMotivoId": 0,
          "origemId": 0,
          "segmento": null,
          "origem": null,
          "associacaoOcorrenciaId": null,
          "associacaoProtocoloId": null,
          "statusId": 1,
          "usuarioInclusao": "USR_SPD",
          "dataHoraInclusao": "2020-09-30T18:56:10",
          "usuarioAtualizacao": "USR_SPD",
          "dataHoraAtualizacao": "2020-09-30T18:56:10",
          "usuarioEncerramento": null,
          "procedente": "S",
          "dataEncerramento": "0001-01-01T00:00:00",
          "motivoResolucao": {
              "id": 0,
              "centralAtendimentoId": 0,
              "tipoOcorrenciaId": 0,
              "segmentoClienteId": 0,
              "motivoOcorrenciaId": 0,
              "subMotivoOcorrenciaId": 0,
              "motivoResolucao": null,
              "situacaoMotivoResolucaoId": "\u0000"
          },
          "motivoResolucaoId": 0,
          "textoAdicionalResolucao": null,
          "ferramenta": 0,
          "observacaoSolucaoAtendimento": "Criação automatica",
          "ec": 0,
          "processoId": null,
          "containerId": null,
          "taxonomia": {
              "tipo": null,
              "motivo": null,
              "subMotivo": null,
              "origemId": 0,
              "tipoId": 0,
              "motivoId": 0,
              "subMotivoId": 0,
              "segmentoId": 0,
              "resolucaoTaxonomia": 0,
              "formularioDinamico": false,
              "formularioEspecializado": false,
              "processoWorkflowId": null,
              "quantidadeHoras": 0,
              "situacao": null,
              "processoWorkflow": null,
              "containerWorkflow": null
          },
          "statusProcessamentoDesc": null,
          "processoNome": null,
          "container": null,
          "tarefaId": null,
          "urlTarefa": null,
          "atribuido": null,
          "dataPrevisao": "0001-01-01T00:00:00",
          "statusTarefa": null,
          "nomeBackoffice": null,
          "comentarios": [],
          "anexos": null
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
  CriarOcorrencia
}