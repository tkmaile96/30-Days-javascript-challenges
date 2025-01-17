document.addEventListener('DOMContentLoaded', () => {
    const joke = document.getElementById('joke');
    const jokeButton = document.getElementById('joke-btn');
    const setup = document.getElementById('setup');
    const punchline = document.getElementById('punchline');
  
    if (!joke) {
      console.error('Error: Element with id "joke" not found.');
      return;
    }
  
    // API URL for fetching quotes
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
  
    // Function to fetch and display a quote
    async function getJoke() {
      try {
        const response = await fetch(apiUrl);
        console.log('Response:', response); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data); 
        joke.textContent = `"${data.type}"`;
        setup.textContent = data.setup;
        punchline.textContent = data.punchline;
      } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to fetch a joke. Please try again.';
      }
    }
  
    // Event listener for the button
    jokeButton.addEventListener('click', getJoke);
  
    // Fetch a quote on page load
    getJoke();
  });
  
