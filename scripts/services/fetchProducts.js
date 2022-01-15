const BASE_URI = "https://products-by-category.herokuapp.com/"

export async function fetchProductsByCategory() {
  const response = await fetch(`${BASE_URI}`)
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }
  
  if (response.status === 204) return {};
  
  return await response.json();
}