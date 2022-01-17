import { cardProduct } from "../components/cardProduct.js";
import { cartItem } from "../components/cartItem.js";
import { categoryNav } from "../components/categoryNav.js";
import { modalCart } from "../components/modal.js";
import { STORE } from "../store.js";

export const mainPage = (() => {
  function filterByCategory(e) {
    e.preventDefault();
    const category = e.target.innerText;
    const filteredProducts = STORE.getProductsByCategory().filter(product => product.name === category);
    const productsContainer = document.querySelector('.results-container');
    productsContainer.innerHTML = "";
    filteredProducts[0].products.forEach(product => {
      productsContainer.innerHTML += cardProduct(product)
    });
    const toCart = document.querySelectorAll('.actions-wrapper');
    toCart.forEach(toCart => toCart.addEventListener('click', addToCart));
  }

  function searchProducts(e) {
    e.preventDefault();
    console.log(e.target.value);
    const searchTerm = e.target.value;
    const filteredProducts = STORE.getProducts().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const productsContainer = document.querySelector('.results-container');
    productsContainer.innerHTML = "";
    filteredProducts.forEach(product => productsContainer.innerHTML += cardProduct(product));
    const toCart = document.querySelectorAll('.actions-wrapper');
    toCart.forEach(toCart => toCart.addEventListener('click', addToCart));
  }

  function addToCart(e) {
    e.preventDefault();
    const productId = e.target.dataset.id;
    const product = STORE.getProducts().find(product => product.id === parseInt(productId));
    STORE.getCart().find(cartItem => cartItem.id === parseInt(product.id)) ? alert('Product already in cart') : 
                                                                             STORE.setCart(product);
    
    const modaltr = document.querySelector('.modal-body tbody');
    modaltr.innerHTML = STORE.getCart().map(cartItem).join(''); 
  }

  return {
    render: () => {
      const products = STORE.getShuffledProducts();
      const toinner = products.map(prod => cardProduct(prod)).join("");

      const categories = STORE.getCategories();
      const innerCategories = categories.map(categoryNav).join("")

      return `
        <header>
          <p class="header--title">My Online Store!</p>
          <div class="icons--container">
            <img class="header--icon" src="./assets/icons/search.svg" />
            <img data-toggle="modal" data-target="#cartModal" class="header--icon btn btn-success" src="./assets/icons/car.svg" />
            <input id="search" type="text" placeholder="Search" />
          </div>
        </header>
        <div class="ctm">${modalCart()}</div>

        <ul class="nav nav-tabs categories-container">
          ${innerCategories}
        </ul>

        <section class = "results-container">
          ${toinner}
        </section>
      `;
    },
    toListeners: () => {
      const categories = document.querySelectorAll('.categories-container li');
      categories.forEach(category => category.addEventListener('click', filterByCategory));

      const search = document.querySelector('#search');
      search.addEventListener('keyup', searchProducts);

      const toCart = document.querySelectorAll('.actions-wrapper');
      toCart.forEach(toCart => toCart.addEventListener('click', addToCart));
    }
  }
})();