const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/messages', async (req, res) => {
  const { name, message } = req.body;
  const newMessage = new Message({ name, message });
  await newMessage.save();
  res.status(201).json({ success: true });
});

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
