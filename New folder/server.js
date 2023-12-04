const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://meet:meet1494@cluster0.yqvokoa.mongodb.net/meet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
