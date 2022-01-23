import { ALERTS } from "../components/alerts.js";
import { cardProduct } from "../components/cardProduct.js";
import { cartItem } from "../components/cartItem.js";
import { categoryNav } from "../components/categoryNav.js";
import { modalCart } from "../components/modal.js";
import { INNERS } from "../inners/inners.js";
import { STORE } from "../store.js";

export const mainPage = (() => {
  function filterByCategory(e) {
    e.preventDefault();
    const category = e.target.innerText;
    const filteredProducts = STORE.getProductsByCategory().filter(product => product.name === category);
    INNERS.writeProductsForCategory(filteredProducts);

    const toCart = document.querySelectorAll('.actions-wrapper');
    toCart.forEach(toCart => toCart.addEventListener('click', addToCart));

    window.scrollTo(0,0);
  }

  function searchProducts(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    const filteredProducts = STORE.getProducts().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    INNERS.writeProductsBySearch(filteredProducts);
    
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
    INNERS.writeOnCart();

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('change', changeQyt))

    INNERS.getTotalPrice();
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

    INNERS.getTotalPrice();
  }

  function deleteOfCart(e) {
    e.preventDefault();
    const productId = e.target.id;
    STORE.deleteItemCart(productId);;
    
    INNERS.writeOnCart();
    ALERTS.deleted();

    const deleteButton = document.querySelectorAll('.btn-sm-close');
    deleteButton.forEach(item => item.addEventListener('click', deleteOfCart));

    const qytinput = document.querySelectorAll('.modal-body .input .form-control')
    qytinput.forEach(i => i.addEventListener('change', changeQyt))

    INNERS.getTotalPrice();
    INNERS.drawEmpty()
  }

  function buySuccess(e) {
    e.preventDefault()
    if(STORE.getCart().length === 0) ALERTS.emptyCart();
    else ALERTS.makeShop()
    console.log('buy success')
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

      const success = document.querySelector('.btn.btn-success');
      success.addEventListener('click', buySuccess);
    }
  }
})();