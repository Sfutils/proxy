const  fs = require("fs");
const request = require('request');
const axios = request('axios');
const config = require('../config/index');
getDocumentPdf = (req, res) => {

  try {
    fs.mkdirSync(path.join(__dirname, '../document/'))
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
  const {uri, idProposta, idArtefato, idCanal, nomeArquivo} = req.body

  request(uri).pipe(fs.createWriteStream(path.resolve('./document/'+ nomeArquivo))).on('close',  () => {
    
      axios.post(config.formalizacao.urlArtefato, payload,headers).then((resp) => {

        const jsonText3 = JSON.stringify(resp.data);
        const responseObject3 = JSON.parse(jsonText3);
       res.json(responseObject3)
      }).catch((err) => {
       res.status(err.response.status).json({error: err.response.statusText})
     });

   

  });

}


module.exports ={
  getDocumentPdf
}