import { INNERS } from "../inners/inners.js";
import { STORE } from "../store.js";

export const switchCategory = (category) => {
  let filteredProducts = []
  switch (category) {
    case 'todos':
      filteredProducts = STORE.getShuffledProducts();
      INNERS.writeProducts(filteredProducts);
      break;
    case 'ofertas':
      filteredProducts = STORE.getShuffledProducts()
                              .filter(product => product.discount != 0)
                              .sort((a, b) => a.discount - b.discount);
      INNERS.writeProducts(filteredProducts);
      break;
    default:
      filteredProducts = STORE.getProductsByCategory().filter(cat => cat.name === category);
      INNERS.writeProductsForCategory(filteredProducts);
      break;
  }
}