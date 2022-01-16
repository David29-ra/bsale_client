export const cardProduct = function(product) {
  const {id, name, url_image, price, discount} = product;
  return `
    <div class="product" data-id=${id}>
      <a class="img-wrapper">
        <img src="${url_image}" alt="${name}" />
      </a>
      
      <div class="info">
        <div class="title"><a href="#">${name}</a></div>
        ${discount == 0 ? `<div class='price'>$${price.toFixed(2)}</div>` : 
                                  `<div class='price sale'>$${(price * 0.01 * (100 - discount)).toFixed(2)}</div>
                                   <div class="price old">$${price.toFixed(2)}</div>`}
      </div>
      
      <div class="actions-wrapper">
        <a href="#" class="add-btn cart">&#x1F6D2 Cart</a>
      </div>
    </div>
  `
}