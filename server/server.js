const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Lightweight songs (in KB)
let songs = [
  { id: 1, title: 'Light Song One', artist: 'Artist One', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }, // ~1.5 MB
  { id: 2, title: 'Light Song Two', artist: 'Artist Two', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }, // ~1.3 MB
  { id: 3, title: 'Light Song Three', artist: 'Artist Three', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }, // ~1.2 MB
  { id: 4, title: 'Short Clip One', artist: 'Artist Four', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }, // ~0.5 MB
  { id: 5, title: 'Short Clip Two', artist: 'Artist Five', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' }, // ~0.6 MB
];

// Get songs
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

// Update song order
app.post('/api/update-order', (req, res) => {
  songs = req.body;
  res.status(200).send('Order updated');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});