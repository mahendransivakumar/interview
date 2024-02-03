var apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(productData => {
        // Store API response as a formatted JSON string
        var data = JSON.stringify(productData, null, 2);
        
        // Display data in a div with id "apiDataContainer"
        document.getElementById('apiDataContainer').innerText = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
    });

