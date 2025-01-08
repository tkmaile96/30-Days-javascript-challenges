document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const button = document.querySelector('button');
  
    if (!quoteElement) {
      console.error('Error: Element with id "quote" not found.');
      return;
    }
  
    // API URL for fetching quotes
    const apiUrl = 'https://quotes-api-self.vercel.app/quote';
  
    // Function to fetch and display a quote
    async function generateQuote() {
      try {
        const response = await fetch(apiUrl);
        console.log('Response:', response); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data); 
        quoteElement.textContent = `"${data.quote}" - ${data.author}`;
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
  
