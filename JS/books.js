// JavaScript to keep the search bar at the bottom of the page
window.addEventListener('scroll', function () {
    var searchContainer = document.getElementById('search-container');
    var header = document.querySelector('header');
    var headerHeight = header.clientHeight;

    if (window.scrollY > headerHeight) {
        searchContainer.style.position = 'fixed';
        searchContainer.style.bottom = '0';
        searchContainer.style.right = '0';
    } else {
        searchContainer.style.position = 'static';
    }
});

// Sample book data (replace with your actual data)
var books = [
    {
        title: "Modern Cryptography",
        author: "Jonathan Katz & Yehuda Lindell",
    },
    {
        title: "Cloud Computing for Dummies",
        author: "Judith Hurwitz, Robin Bloor, Marcia Kaufman",
    },
    // Add more book data as needed
];

// Function to search for books
function searchBooks() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var results = books.filter(function (book) {
        return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
    });

    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    var resultContainer = document.querySelector('.result');
    resultContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(function (result) {
            var resultItem = document.createElement('div');
            resultItem.innerHTML = '<p><strong>Title:</strong> ' + result.title + '</p><p><strong>Author:</strong> ' + result.author + '</p>';
            resultContainer.appendChild(resultItem);
        });

        highlightTextInResults();
    }
}

// Function to highlight text in results
function highlightTextInResults() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var resultContainer = document.querySelector('.result');
    var textNodes = resultContainer.querySelectorAll('p');

    textNodes.forEach(function (node) {
        var text = node.innerHTML.toLowerCase();
        var highlightedText = text.replace(new RegExp(searchTerm, 'gi'), function (match) {
            return '<span class="highlight">' + match + '</span>';
        });
        node.innerHTML = highlightedText;
    });

    scrollResultToTop();
}

// Function to scroll to the highlighted results
function scrollResultToTop() {
    var resultContainer = document.querySelector('.result');
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// Function to break text in h2 after a specific number of words and continue shifting
function breakH2Text() {
    var h2Elements = document.querySelectorAll('.book-title');
    h2Elements.forEach(function (h2) {
        var text = h2.textContent;
        var words = text.split(' ');
        var maxWordsPerLine = 3; // Adjust the number of words per line as needed
        if (words.length > maxWordsPerLine) {
            var newText = '';
            for (var i = 0; i < words.length; i += maxWordsPerLine) {
                var line = words.slice(i, i + maxWordsPerLine).join(' ');
                newText += line + '<br>';
            }
            h2.innerHTML = newText;
        }
    });
}

// Call the function to break text in h2 elements
breakH2Text();
