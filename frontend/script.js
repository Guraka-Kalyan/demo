const getJokeBtn = document.getElementById('getJokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

// Uses environment variable for production, defaults to localhost for development
// .replace ensures no double-slash if env var has a trailing slash
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/+$/, '');

async function fetchJoke() {
  getJokeBtn.disabled = true;
  getJokeBtn.innerText = 'Loading...';
  jokeDisplay.classList.add('loading');

  try {
    const response = await fetch(`${API_URL}/joke`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Smooth transition
    jokeDisplay.classList.remove('loading');
    jokeDisplay.classList.remove('joke-animation');
    // Force reflow for animation
    void jokeDisplay.offsetWidth;
    jokeDisplay.classList.add('joke-animation');
    
    jokeDisplay.innerText = data.joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeDisplay.innerText = "Oops! Our joked-out machine seems to be on a break. Please make sure the backend server is running on port 3000!";
  } finally {
    getJokeBtn.disabled = false;
    getJokeBtn.innerText = 'Get Joke';
  }
}

getJokeBtn.addEventListener('click', fetchJoke);
