function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   return fetch('https://anapioficeandfire.com/api/books')
          .then(response => response.json())
          .then(data => {
              renderBooks(data);
              return data; 
          })
          .catch(console.error);
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

fetchBooks();

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
