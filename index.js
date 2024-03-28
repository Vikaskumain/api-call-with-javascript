
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        renderData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Function to render data
    function renderData(data) {
      const dataList = document.getElementById('dataList');

      // Loop through the data and create HTML elements to display it
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow';

        const title = document.createElement('h2');
        title.className = 'text-lg font-bold mb-2';
        title.textContent = item.title;

        const description = document.createElement('p');
        description.className = 'text-gray-700';
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);
        dataList.appendChild(card);
      });
    }

    // Call fetchData function when the page loads
    window.onload = fetchData;
  