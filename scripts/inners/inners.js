import { cardProduct } from "../components/cardProduct.js";
import { cartItem } from "../components/cartItem.js";
import { STORE } from "../store.js";

export const INNERS = (function () {
  function writeProductsForCategory(productsFiltered) {
    const productsContainer = document.querySelector('.results-container');
    productsContainer.innerHTML = "";
    productsFiltered[0].products.forEach(product => {
      productsContainer.innerHTML += cardProduct(product)
    });
  }

  function writeProductsBySearch(productsSearched) {
    const productsContainer = document.querySelector('.results-container');
    productsContainer.innerHTML = "";
    productsSearched.forEach(product => productsContainer.innerHTML += cardProduct(product));
  }
  
  function writeOnCart() {
    const modaltr = document.querySelector('.modal-body tbody')
    const emptyshow = document.querySelector('.empty-table');
    emptyshow.innerHTML = "";
    modaltr.innerHTML = STORE.getCart().map(cartItem).join('');
  }

  function drawEmpty() {
    const emptyshow = document.querySelector('.empty-table');
    emptyshow.innerHTML = "";
    STORE.getCart().length === 0 ? emptyshow.innerHTML = `<p>Your cart is empty</p>
    <img class="empty" src="./assets/images/empty.svg" alt="empty" />` : null
  }

  function getTotalPrice() {
    const totals = document.querySelectorAll(".modal-body .subtotal span")
    let sumTotals = 0
    totals.forEach(prices => sumTotals += parseInt(prices.innerText))
    const innerTotal = document.querySelector("h5 span")
    innerTotal.textContent = `$ ${sumTotals.toFixed(2)}`
  }
  return {
    writeProductsBySearch,
    writeProductsForCategory,
    writeOnCart,
    getTotalPrice,
    drawEmpty
  }
})()