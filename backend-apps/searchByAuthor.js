// Route to search books by author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author.toLowerCase();

  // Find all books by the given author
  const booksByAuthor = Object.values(books).filter(
    b => b.author.toLowerCase() === author
  );

  if (booksByAuthor.length > 0) {
    res.json(booksByAuthor);
  } else {
    res.status(404).json({ message: "No books found by this author" });
  }
});
