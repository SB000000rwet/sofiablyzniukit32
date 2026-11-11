import ProductFilter from "./components/ProductFilter";

const products = [
  { id: 1, name: "Ноутбук Lenovo", category: "Ноутбуки", price: 25000 },
  { id: 2, name: "Миша Logitech", category: "Аксесуари", price: 800 },
  { id: 3, name: "Клавіатура механічна", category: "Аксесуари", price: 2500 },
  { id: 4, name: "Монітор Samsung", category: "Монітори", price: 9000 },
  { id: 5, name: "Навушники JBL", category: "Аудіо", price: 4500 },
  { id: 6, name: "Смартфон Samsung", category: "Смартфони", price: 18000 },
];

export default function Home() {
  return (
    <main>
      <h1>Магазин техніки</h1>

      <p>Кількість товарів на сервері: {products.length}</p>

      <ProductFilter products={products} />
    </main>
  );
}