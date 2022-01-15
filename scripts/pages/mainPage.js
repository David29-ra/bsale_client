import { STORE } from "../store.js";

export const mainPage = (() =>{
  return {
    render: () => {
      return `
        <div class="main-page">
          <div class="main-page__header">
            <h1 class="main-page__title">Products</h1>
          </div>
          <div class="main-page__content">
            <div class="main-page__products">Hola</div>
          </div>
        </div>
      `;
    },
    toListeners: () => {}
  }
})()