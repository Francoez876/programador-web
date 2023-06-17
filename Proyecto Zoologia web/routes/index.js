var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var nodemailer = require("nodemailer")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var nodemailer = require("nodemailer")

router.post("/", async(req, res, next)=> {

    console.log(req.body) 
  
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var tel = req.body.tel;
    var mensaje = req.body.mensaje;
  
    var obj ={
      to: "francoezequiel876@gmail.com",
      subject: "contacto desde la web",
      html: nombre + "se contacto a traves de la web y quiere mas info a este correo: " 
       + email + ". <br> ademas, hizo el siguiente comentario:" + mensaje + ".<br> Su tel es " + tel
      }//cierre var obj
  
    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })  //CIERRA TRANSPORTER
  
    
    
    var info = await transport.sendMail(obj);
    
    res.render("index", {
      message: "mensaje enviado correctamente",
    });
  
  
    }); //cierra peticion del POST


    module.exports = router;



