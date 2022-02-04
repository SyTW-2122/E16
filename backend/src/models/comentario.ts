let mongoose = require('mongoose');

export class Comentario {
  public user: string;
  public comment: string;
  constructor(private usuario: string, private comentario: string) {
    this.user = usuario;
    this.comment = comentario;
  }
}

export const comentarioSchema = new mongoose.Schema({
  user: {
    type: String,
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
