// Function to include header
function includeHeader() {
    fetch('layouts/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data)
        .catch(error => console.error('Error:', error));
}

// Function to include footer
function includeFooter() {
    fetch('layouts/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data)
        .catch(error => console.error('Error:', error));
}


// Call functions to include header and footer when the page loads
document.addEventListener('DOMContentLoaded', function () {
    includeHeader();
    includeFooter();
});
