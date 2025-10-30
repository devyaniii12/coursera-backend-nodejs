// Route to search books by title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title.toLowerCase();

  // Find all books that match the given title
  const booksByTitle = Object.values(books).filter(
    b => b.title.toLowerCase() === title
  );

  if (booksByTitle.length > 0) {
    res.json(booksByTitle);
  } else {
    res.status(404).json({
      message: "No books found with this title"
    });
  }
});