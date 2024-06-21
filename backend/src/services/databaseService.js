const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const chatSchema = new mongoose.Schema({
  message: String,
  response: String,
});

const Chat = mongoose.model('Chat', chatSchema);

const saveChat = async (message, response) => {
  const chat = new Chat({ message, response });
  await chat.save();
};

module.exports = { saveChat };
