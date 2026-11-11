export default function CatalogPage() {
  const books = [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
    },
    {
      id: 2,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
    },
    {
      id: 3,
      title: 'Коротка історія часу',
      author: 'Стівен Гокінг',
    },
  ];

  return (
    <div>
      <h3>Список книг</h3>

      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <p>Автор: {book.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}