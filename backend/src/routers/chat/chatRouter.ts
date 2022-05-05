let express = require('express');
import {chatModel} from '../../models/chat';
export const chatRouter = express.Router();

chatRouter.get('/Chat', async (req, res) => {
  const chatEncontrado = await chatRouter.findById({_id: req.body._id});
  if (!chatEncontrado) return res.status(404).json({error: 'Chat no encontrado'});
  res.json(chatEncontrado);
});

chatRouter.post('/Chat', async (req, res) => {
  const newChat = new chatModel({
    owner: req.body.owner,
    comments: [],
  });

  try {
    await newChat.save();
    res.json(newChat);
  } catch (error) {
    res.status(402).json({error});
  }
});