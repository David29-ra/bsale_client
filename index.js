import { DomHandler } from "./scripts/domHandler.js";
import { mainPage } from "./scripts/pages/mainPage.js";
import { fetchProductsByCategory } from "./scripts/services/fetchProducts.js";
import { STORE } from "./scripts/store.js";

(async () =>{
  try {
    const productsPerCategory = await fetchProductsByCategory();
    console.log(productsPerCategory);
    STORE.setProducts(productsPerCategory);
    return DomHandler.render(mainPage);
  } catch (error) {
    console.log(error);
  }
  DomHandler.render(mainPage)
})();