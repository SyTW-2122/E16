var mongoose = require('mongoose');
import {Comentario} from "./comentario"

export class Chat {
  private owner: string;  // Dueño sería una Cuenta
  public comments: Comentario[] = [];
  constructor(private dueño: string, private comentarios: Comentario[]) {
    this.owner = dueño;
    this.comments = comentarios;
  }
}

export const chatSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Comentarios',
    required: true,
    trim: true,
  }
});

export const chatModel = mongoose.model('Chats', chatSchema);
