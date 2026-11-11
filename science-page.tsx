export default function SciencePage() {
  const books = [
    'Коротка історія часу — Стівен Гокінг',
    'Походження видів — Чарльз Дарвін',
    'Космос — Карл Саган',
  ];

  return (
    <div>
      <h3>Наукова література</h3>

      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}