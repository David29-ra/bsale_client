import { STORE } from "../store.js";

export const mainPage = (() =>{
  console.log(STORE.getProducts());
  return {
    render: () => {
      return `
        <header>
          <p class="header--title">My Online Store!</p>
          <div class="icons--container">
            <img class="header--icon" src="./assets/icons/search.svg" />
            <img class="header--icon" src="./assets/icons/car.svg" />
          </div>
        </header>

        <section class="categories-container">
          <div class="category-container">
            <p>category 1</p>
          </div>
          <div class="category-container">
            <p>category 2</p>
          </div>
          <div class="category-container">
            <p>category 3</p>
          </div>
          <div class="category-container">
            <p>category 4</p>
          </div>
          <div class="category-container">
            <p>category 5</p>
          </div>
          <div class="category-container">
            <p>category 6</p>
          </div>
          <div class="category-container">
            <p>category 7</p>
          </div>
        </section>

        <section class = "results-container">
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
          <div class = "result-container">resultado!</div>
        </section>
      `;
    },
    toListeners: () => {}
  }
})();