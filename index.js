import { DomHandler } from "./scripts/domHandler.js";
import { loadingPage } from "./scripts/pages/loadingPage.js";
import { mainPage } from "./scripts/pages/mainPage.js";
import { fetchProductsByCategory } from "./scripts/services/fetchProducts.js";
import { STORE } from "./scripts/store.js";

(async () =>{
  try {
    const productsPerCategory = await fetchProductsByCategory();
    console.log(productsPerCategory);
    STORE.setProducts(productsPerCategory);
    // DomHandler.render(".root", loadingPage);
    return DomHandler.render(".root", mainPage);
  } catch (error) {
    console.log(error);
  }
})();