var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var cronicaSchema = new Schema({

  local: { type: String},
  visitante: { type: String},
  resultado: { type: String },
  jornada: { type:Number },
  goleadores: [{type: Schema.Types.ObjectId, ref: 'Jugador'}],
  asistentes: [{type: Schema.Types.ObjectId, ref: 'Jugador'}],
  amonestados: {
    amarillas: [{type: Schema.Types.ObjectId, ref: 'Jugador'}],
    rojas: [{type: Schema.Types.ObjectId, ref: 'Jugador'}]
  },
  equipo : { type: String, enum:
    ['Sènior A', 'Sènior B', 'Sènior C', 'Juvenil A', 'Juvenil B', 'Juvenil C', 'Infantil A']
  }
});
// export
module.exports = mongoose.model('Cronica', cronicaSchema);
