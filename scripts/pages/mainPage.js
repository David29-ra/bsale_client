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
    console.log(STORE.getCart());

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('keyup', changeQyt))

    const totals = document.querySelectorAll(".modal-body .subtotal")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$${sumTotals.toFixed(2)}`
  }

  function changeQyt(e) {
    e.preventDefault()
    
    const newqyt = e.target.value
    const id = e.target.id
    STORE.editQyt(id, newqyt)
    
    const modaltr = document.querySelector('.modal-body tbody');
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('keyup', changeQyt))

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const totals = document.querySelectorAll(".modal-body .subtotal")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$${sumTotals.toFixed(2)}`
  }

  function deleteOfCart(e) {
    e.preventDefault();
    const productId = e.target.id;
    STORE.deleteItemCart(productId);;
    
    const modaltr = document.querySelector('.modal-body tbody');
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('keyup', changeQyt))

    const totals = document.querySelectorAll(".modal-body .subtotal")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$${sumTotals.toFixed(2)}`
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
        ${modalCart()}

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