export const cardProduct = function(product) {
  const {id, name, url_image, price, discount} = product;
  return `
    <li class="product" data-id=${id}>
      <a class="img-wrapper">
        <img src="${url_image}" alt="${name}" />
      </a>
      
      <div class="info">
        <div class="title"><a href="#">${name}</a></div>
        ${discount == 0 ? `<div class='price'>${price}</div>` : 
                                  `<div class='price sale'>${price * 0.01 * (100 - discount)}</div>
                                   <div class="price old">${price}</div>`}
      </div>
      
      <div class="actions-wrapper">
        <a href="#" class="add-btn cart">&#x1F6D2 Cart</a>
      </div>
    </li>
  `
}