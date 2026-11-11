import Link from 'next/link';

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Каталог книг</h2>

      <nav>
        <Link href="/catalog">Усі книги</Link> |{' '}
        <Link href="/catalog/fiction">
          Художня література
        </Link> |{' '}
        <Link href="/catalog/science">
          Наукова література
        </Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}