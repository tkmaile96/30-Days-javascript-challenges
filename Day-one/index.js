document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const button = document.querySelector('button');
  
    // API URL for fetching quotes
    const apiUrl = 'https://favqs.com/api/qotd';
  
    // Function to fetch and display a quote
    async function generateQuote() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        quoteElement.textContent = `"${data.content}" - ${data.author}`;
      } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to fetch a quote. Please try again.';
      }
    }
  
    // Event listener for the button
    button.addEventListener('click', generateQuote);
  
    // Fetch a quote on page load
    generateQuote();
  });
  