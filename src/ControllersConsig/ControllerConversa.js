
const axios = require('axios');
const uuid = require('../utils/index');
const config = require('../config/index');


artefatosHistory = async (req, res) => {


  let table='';
  
  table += `<html> <style>

  .messages {
    padding: 5% 0;
    overflow: auto;
    flex: auto;
  }
  
  .messageBox {
    background: #F3F3F3;
    border-radius: 15px;
    padding: 1px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
  }
  
  .messageText {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 0.9em;
    word-wrap: break-word;
  }
  
  .messageText img {
    vertical-align: middle;
  }
  
  .messageContainer {
    display: flex;
    margin-left: 20px;
    padding: 0 1%;
    margin-top: 3px;
  }
  
  .sentText {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
    
  
  }
  
  .pl-10 {
    padding-left: 10px;
    width: 40em; word-wrap: break-word;
   
  }
  .pl-11 {
    padding-left: 10px;
  
    
  }
  
  .pr-10 {
    padding-right: 10px;
  
  }
  
  .justifyStart {
    justify-content: flex-start;
  }
  
  .justifyEnd {
    margin-left: 900px;
  }
  
  .colorWhite {
    color: white;
  }
  
  .colorDark {
    color: #738192;
  }
  
  .backgroundBlue {
    background: #0cc8cc;
  }
  
  .backgroundLight {
    background: #ebeef2;
  }
  .thread-header {
    width:100%;
    height:60px;
    background-color: #363f4e;
    border-radius: 5px;
    margin-bottom: 30px;

}
.text-history {

     font-family: Helvetica;
     color: #ffffff;
     margin-left:680px;
     margin-top:100px;
     font-size: 1.7em;
}
</style>
  `;
  
  
  var options = {
    "format": "A4",
    "orientation": "landscape",
    "border": {
      "top": "0.1in",
  },
  "timeout": "120000"
  };


    const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Key c2FmcmFwcm9kZ2VyZGlnZW1wMTo2bEVPZVVjNUNOOW05cXBBMVlqaA=='
        }}
    const payload = {  
              "id": uuid.uuid(),
              "method": "get",
              "uri": `/threads/5511999502859@wa.gw.msging.net?storageDate=2020-10-27&direction=desc`
  }
          
       const response2 = await axios.post(`${config.formalizacao.baseUrl}/commands`, payload,headers);

       console.log("data", response2.data)
  
       const conversaBot =  response2.data.resource.items.map((e) => 
         {
         return {...e, autor: e.direction === 'sent'?'bot':'usuário'}
  
        }).map((e) => {
            return {
              autor:e.autor,
              content: typeof e.content == 'object' ? e.content: e.content,
              type: typeof e.content == 'object' ? e.content.type : 'text',
              url: typeof e.content == 'object' ? e.content.uri : '',
              data: e.date.split('T')[0].split('-').reverse().join('/'),
              hora: e.date.split('T')[1].split('.')[0]
            }
          }).filter(e => e != null).reverse()
        
         table += `<body>
         
          <div class="thread-header" translate=""><br><span class="text-history"> Histórico de Conversa</span></div>
          <div background:#f9fbfb>`;

        conversaBot.filter((e) => {
  
          if(e.autor === 'bot'){
  
            table += `
            <div class="messageContainer justifyStart">
            <div class="messageBox backgroundLight">
              <p class="sentText pl-10  colorDark">${e.content}</p>
            </div>
             <p class="sentText pl-10 ">ChatBot - ${e.data} - ${e.hora}</p>
 
            </div>
  
            `
          }else{
  
            table += `
            <div class="messageContainer justifyEnd">
            <div class="messageBox backgroundBlue">
              ${typeof e.content == 'object' ? ' <audio controls><source src="https://s3-sa-east-1.amazonaws.com/msging.net/iris/dcfe435e-4450-4277-bcf6-878d66048134" type="audio/mpeg"></source></audio>' : '<p class="sentText pl-11  colorWhite">' + e.content + '</p>'}
            </div>
  
            <p class="sentText pl-11 ">Cliente - ${e.data} - ${e.hora}</p>
            </div>
            ` 
          }
        })
  
        table += `</div></body></html>`;
          res.send(table);


          
  }



module.exports = { artefatosHistory}