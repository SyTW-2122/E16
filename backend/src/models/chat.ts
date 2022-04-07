let mongoose = require('mongoose');
import {Comentario} from "./comentario";

// pueda que no haga falta usarla
export class ChatClass {
  private owner: string; // Dueño sería una Cuenta
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
  message: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Comentarios',
    required: false,
    trim: true,
  },]
});

export const chatModel = mongoose.model('Chat', chatSchema);
