'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Сталася помилка!</h2>

      <p>
        Не вдалося завантажити список книг.
      </p>

      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}