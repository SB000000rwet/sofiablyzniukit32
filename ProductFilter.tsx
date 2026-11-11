"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

type Props = {
  products: Product[];
};

export default function ProductFilter({ products }: Props) {
  const [search, setSearch] = useState("");
  const [onlyCheap, setOnlyCheap] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = !onlyCheap || product.price <= 10000;

    return matchesName && matchesPrice;
  });

  return (
    <section>
      <h2>Каталог товарів</h2>

      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />

      <label>
        <input
          type="checkbox"
          checked={onlyCheap}
          onChange={(e) => setOnlyCheap(e.target.checked)}
        />
        Тільки до 10 000 грн
      </label>

      <h3>Результати пошуку:</h3>

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <br />
              Категорія: {product.category}
              <br />
              Ціна: {product.price.toLocaleString("uk-UA")} грн
            </li>
          ))}
        </ul>
      ) : (
        <p>Товарів не знайдено.</p>
      )}
    </section>
  );
}