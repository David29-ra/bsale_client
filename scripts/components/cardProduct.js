import { capitalize } from "../helpers/capitalize.js";

export const cardProduct = function(product) {
  const {id, name, url_image, price, discount} = product;
  const image = url_image ? url_image : './assets/images/no-image.svg';

  return `
    <div class="product">
      
      <div class="img-wrapper"">
        ${discount == 0 ? '' : `<div class="discount">- ${discount} %</div>`}
        <img src="${image}" alt="${capitalize(name)}" />
      </div>

      <div class="info">
        <div class="title">${capitalize(name)}</div>
        ${discount == 0 ? `<div class='product-price' style="font-size: 18px;">$ ${price.toFixed(2)}</div>` : 
                                  `<div class='product-price sale'>$ ${(price * 0.01 * (100 - discount)).toFixed(2)}</div>
                                  <div class="product-price old">$ ${price.toFixed(2)}</div>`}
      </div>

      
      <div class="actions-wrapper">
        <a data-id=${id} href="#" class="add-btn cart">&#x1F6D2 Cart</a>
      </div>
    </div>
  `
}