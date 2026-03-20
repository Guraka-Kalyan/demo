const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins explicitly
const corsOptions = {
  origin: '*',
  methods: ['GET'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a fish with no eyes? A fsh!",
  "Why did the bicycle fall over? Because it was two-tired!"
];

// Health check route
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Joke API is live!' });
});

app.get('/joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
