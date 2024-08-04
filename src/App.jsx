function App() {
 
  const books = [
    {name: 'To Kill a Mockingbird', read: true},
    {name: '1984', read: false},
    {name: 'Pride and Prejudice', read: true},
    {name: 'The Great Gatsby', read: true},
    {name: 'Moby Dick', read: false},
    {name: 'War and Peace', read: true},
  ];

  return (
    <>
    <h1>List Of Books</h1>
      <ul>
        {books.map((book, index) => 
          <li key={index} className={book.read ? 'read' : 'not-read'}>{book.name}</li>
        )}
      </ul>
    </>
  )
}

export default App
