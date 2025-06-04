import jwt from 'jsonwebtoken'

const clients = [
    {
      id: 10001,
      name: 'Federico Garcia',
      phone: '0034 985 85 58 58',
      city: 'Valencia',
      mail: 'correodepruebas@midominiodepruebas.com'
    },
    {
      id: 10002,
      name: 'Pedro Garcia',
      phone: '0034 985 85 58 58',
      city: 'Valencia',
      mail: 'correodepruebas@midominiodepruebas.com'
    },
    {
      id: 10003,
      name: 'Julian Sanchez',
      phone: '0034 985 85 58 58',
      city: 'Barcelona',
      mail: 'correodepruebas@midominiodepruebas.com'
    },
    {
      id: 10004,
      name: 'Ernesto Medina',
      phone: '0034 985 85 58 58',
      city: 'Ciudad De Mexico',
      mail: 'correodepruebas@midominiodepruebas.com'
    }
  ]

export default {
  /*'/api/login':{
    "secure": false,
    "changeOrigen": true,
    "target":"http://midomio-de-produccion.com" //el dominio de la api back
  } // esta es la manera para acceder al api back, cuando tenemos una direccion api back
   */
  '/api/login':{
    "secure": false,
    "bypass": function(req, res, proxyOptions){
        if(req.method === 'POST'){
            res.setHeader('Content-Type','application/json');
            res.statusCode = 200;
            const token = jwt.sign({
                user_id:'prueba',
                user_pass: 'prueba'
            }, 'en un lugar de la mancha');
            res.end(JSON.stringify({message: 'Login successfull', token:token}));
            return true;
        }
    }
},
'/api/clients': {
      "secure": false,
      "bypass":function(req,res,proxyOptions){
        res.setHeader('Content-type','application/json');
        res.statusCode=200;
        if(req.method === 'GET'){
          const urlParts = req.url.split('/').filter(Boolean);
          if(urlParts.length === 2){
            res.end(JSON.stringify({clients : clients}));
            return true;
          } 
          if(urlParts.length === 3){
            const numberClient = urlParts[2];
            const client = clients.find(e=>e.id === parseInt (numberClient));
            res.end(JSON.stringify({client: client}));
            return true;
          } 

        }
        if(req.method === 'POST'){
          let body ='';
          req.on('data',chunk => {
            body += chunk;
          });
          req.on('end',()=>{
            try{
              const parsedBody = JSON.parse(body).body;
              const lastId = clients[clients.length -1].id; // clients es el arry principal de clientes
              parsedBody.id = lastId + 1
              clients.push(parsedBody);
              res.end(JSON.stringify({message:'Body received', data:parsedBody}));
            }catch(error){
              res.statusCode =400;
              res.end(JSON.stringify({error: 'Invalid JSON'}));
            }
          });
          return true;
        }
      }
    }
}