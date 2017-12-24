var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var jugadorSchema = new Schema({

  nombre: { type: String},
  apellido: { type: String},
  apodo: { type: String },
  dorsal: { type: Number },
  posicion: { type:String},
  imagen: { type:String, default: 'player.png'},
  estadisticas: {
    goles: { type: Number, default: 0},
    asistencias: {type: Number, default: 0},
    amarillas: { type: Number, default: 0},
    rojas: { type: Number, default: 0},
    tarjetas: {type: Number, default: 0},
    partidos: {type: Number, default: 1},
    goles_encajados: {type: Number, default: 0},
    goles_pp: {type: Number, default: 0},
    goles_encajados_pp: {type: Number, default: 0}
  },
  equipo : { type: String, enum:
    ['Sènior A', 'Sènior B', 'Sènior C', 'Juvenil A', 'Juvenil B', 'Juvenil C', 'Infantil A']
  },
  tipo : { type: String, enum:
    ['Tècnic', 'Jugador', 'Porter']
  }
});
// export
module.exports = mongoose.model('Jugador', jugadorSchema);
