import { cardProduct } from "../components/cardProduct.js";
import { categoryNav } from "../components/categoryNav.js";
import { STORE } from "../store.js";

export const mainPage = (() =>{
  return {
    render: () => {
      const products = STORE.getShuffledProducts();
      const toinner = products.map(cardProduct).join("");

      const categories = STORE.getCategories();
      const innerCategories = categories.map(categoryNav).join("")
      return `
        <header>
          <p class="header--title">My Online Store!</p>
          <div class="icons--container">
            <img class="header--icon" src="./assets/icons/search.svg" />
            <img class="header--icon" src="./assets/icons/car.svg" />
          </div>
        </header>

        <ul class="nav nav-tabs categories-container">
          ${innerCategories}
        </ul>

        <section class = "results-container">
          ${toinner}
        </section>
      `;
    },
    toListeners: () => {}
  }
})();