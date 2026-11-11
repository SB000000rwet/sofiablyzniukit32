export default function FictionPage() {
  const books = [
    '1984 — Джордж Орвелл',
    'Маленький принц — Антуан де Сент-Екзюпері',
    'Кобзар — Тарас Шевченко',
  ];

  return (
    <div>
      <h3>Художня література</h3>

      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}