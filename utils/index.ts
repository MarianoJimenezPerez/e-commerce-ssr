export async function fetchProducts() {
  /* const headers = {}; */

  const response = await fetch(
    "https://dummyjson.com/products" /* {
    headers: headers,
  } */
  );

  const result = await response.json();

  return result;
}
