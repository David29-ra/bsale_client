import { ALERTS } from "../components/alerts.js";
import { cardProduct } from "../components/cardProduct.js";
import { cartItem } from "../components/cartItem.js";
import { categoryNav } from "../components/categoryNav.js";
import { modalCart } from "../components/modal.js";
import { STORE } from "../store.js";

export const mainPage = (() => {
  function filterByCategory(e) {
    e.preventDefault();
    const category = e.target.innerText;
    console.log(e.target);
    const filteredProducts = STORE.getProductsByCategory().filter(product => product.name === category);
    const productsContainer = document.querySelector('.results-container');
    productsContainer.innerHTML = "";
    filteredProducts[0].products.forEach(product => {
      productsContainer.innerHTML += cardProduct(product)
    });

    const toCart = document.querySelectorAll('.actions-wrapper');
    toCart.forEach(toCart => toCart.addEventListener('click', addToCart));
    window.scrollTo(0,0);
  }

  function searchProducts(e) {
    e.preventDefault();
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
    if(STORE.getCart().find(cartItem => cartItem.id === parseInt(product.id))) ALERTS.alreadyinCart();
    else {
      STORE.setCart(product)
      ALERTS.added();
    }

    const modaltr = document.querySelector('.modal-body tbody')
    const emptyshow = document.querySelector('.empty-table');
    emptyshow.innerHTML = "";
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('change', changeQyt))

    const totals = document.querySelectorAll(".modal-body .subtotal span")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$ ${sumTotals.toFixed(2)}`
  }

  function changeQyt(e) {
    e.preventDefault()
    
    const newqyt = e.target.value
    const id = e.target.id
    STORE.editQyt(id, newqyt)
    
    const modaltr = document.querySelector('.modal-body tbody');
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('change', changeQyt))

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const totals = document.querySelectorAll(".modal-body .subtotal span")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$ ${sumTotals.toFixed(2)}`
  }

  function deleteOfCart(e) {
    e.preventDefault();
    const productId = e.target.id;
    STORE.deleteItemCart(productId);;
    
    const modaltr = document.querySelector('.modal-body tbody');
    const emptyshow = document.querySelector('.empty-table');
    emptyshow.innerHTML = "";
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');
    ALERTS.deleted();

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('change', changeQyt))

    const totals = document.querySelectorAll(".modal-body .subtotal span")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))

    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$ ${sumTotals.toFixed(2)}`

    STORE.getCart().length === 0 ? emptyshow.innerHTML = `<p>Your cart is empty</p>
    <img class="empty" src="./assets/images/empty.svg" alt="empty" />` : null
  }

  return {
    render: () => {
      const products = STORE.getShuffledProducts();
      const toinner = products.map(prod => cardProduct(prod)).join("");

      const categories = STORE.getCategories();
      const innerCategories = categories.map(categoryNav).join("")

      return `
        <div class="static">
          <header>
            
            <p class="header--title">David Store!</p>
            
            <div class="icons--container">
              <img data-toggle="modal" data-target="#cartModal" class="icon-cart" src="./assets/icons/cart.png" />
              <input id="search" type="text" placeholder="&#x1F50D Search" />
            </div>
          </header>

          <ul class="nav nav-tabs categories-container">
            ${innerCategories}
          </ul>
        </div>

        <section class = "results-container">
          ${toinner}
        </section>
        ${modalCart()}
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