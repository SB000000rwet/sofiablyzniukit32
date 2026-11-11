import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>Електронна бібліотека</h1>

          <nav>
            <Link href="/">Головна</Link> |{' '}
            <Link href="/catalog">Каталог книг</Link> |{' '}
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        <hr />

        <main>
          {children}
        </main>

        <hr />

        <footer>
          <p>© 2026 Електронна бібліотека</p>
        </footer>
      </body>
    </html>
  );
}