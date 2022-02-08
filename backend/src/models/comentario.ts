let mongoose = require('mongoose');

export class Comentario {
  public postedBy: string;
  public comment: string;
  constructor(public usuario: string, public comentario: string) {
    this.postedBy = usuario;
    this.comment = comentario;
  }
}

export const comentarioSchema = new mongoose.Schema({
  postedBy: {
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta'},
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
});

export const comentarioModel = mongoose.model('Comentarios', comentarioSchema);
