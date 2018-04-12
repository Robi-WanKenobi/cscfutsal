'use strict';


var jwt=require('jwt-simple');
var moment = require('moment');
var secret = 'cl4v3_csc_ultr4_futs4l_s3cr3t4'

exports.createToken = function (admin) {
  var payload = {
    sub: admin._id,
    name: 'CSCFutsalADM',
    usuario: admin.usuario,
    iat: moment().unix(), //creacion
    exp: moment().add(1, 'days'.unix)
  }
  return jwt.encode(payload, secret);
}
