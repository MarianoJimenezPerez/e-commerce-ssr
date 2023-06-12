import Image from "next/image";
import { CustomFilter, Hero, ProductCard, SearchBar } from "@/components";
import { fetchProducts } from "@/utils";

export default async function Home() {
  const allProducts = await fetchProducts();

  const isDataEmpty =
    !Array.isArray(allProducts.products) ||
    allProducts.length < 1 ||
    !allProducts;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl front-extrabold">Catálogo de productos</h2>
          <p>Explora y encuentra los indicados</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filer-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__products-wrapper">
              {allProducts?.products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h3 className="text-black text-xl font-bold">
              Oops, no hay resultados
            </h3>
            <p>{allProducts?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
