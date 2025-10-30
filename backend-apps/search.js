// Route to search a book by ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;

  // Promise to find book by ISBN
  const getBookByISBN = new Promise((resolve, reject) => {
    const book = Object.values(books).find(b => b.isbn === isbn);
    if (book) {
      resolve(book);
    } else {
      reject({
        message: "Book not found"
      });
    }
  });

  // Handle promise result
  getBookByISBN
    .then(book => res.json(book))
    .catch(error => res.status(404).json(error));
});
