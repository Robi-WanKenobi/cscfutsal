'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'cl4v3_csc_ultr4_futs4l_s3cr3t4';

exports.ensureAuth = function (req, res, next) {
  if(!req.headers.authorization){
    console.log("No auth");
    return res.status(403).send({message: "La petición requiere autenticación"});
  }

  var token = req.headers.authorization.replace(/['"]+/g,'');

  try{
    var payload = jwt.decode(token, secret);

    if(payload.exp >= moment().unix){
      console.log("Token expired");
      return res.status(401).send({
        message: "El token ha expirado"
      })
    }
  }catch (ex){
    console.log("Mal token");
    return res.status(404).send({
      message: "El token no es válido"
    })
  }
  req.admin = payload;
  next();
};
