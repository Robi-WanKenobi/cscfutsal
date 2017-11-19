var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var jugadorSchema = new Schema({

  nombre: { type: String},
  apellido: { type: String},
  apodo: { type: String },
  dorsal: { type: Number },
  posicion: { type:String},
  estadisticas: {
    goles: { type: Number},
    asistencias: {type: Number},
    amarillas: { type: Number},
    rojas: { type: Number}
  },
  equipo : { type: String, enum:
    ['Sènior A', 'Sènior B', 'Sènior C', 'Juvenil A', 'Juvenil B', 'Juvenil C', 'Infantil A']
  }
});
// export
module.exports = mongoose.model('Jugador', jugadorSchema);
