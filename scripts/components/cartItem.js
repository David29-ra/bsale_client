import { capitalize } from "../helpers/capitalize.js";

export const cartItem = (product) => {
  const {id, name, url_image, price, discount, qyt} = product;
  const priceWithDiscount = discount == 0 ? price.toFixed(2) : (price * 0.01 * (100 - discount)).toFixed(2);
  const image = url_image ? url_image : './assets/images/no-image.svg';

  return `
    <tr>
      <td class="w-25">
        <img src="${image}" class="img-fluid img-thumbnail" alt="${name}">
      </td>
      <td>${capitalize(name)}</td>
      <td>$ ${priceWithDiscount}</td>
      <td class="qty input"><input type="number" class="form-control" id="${id}" value="${qyt}" min="1"></td>
      <td class="subtotal">$ <span>${(priceWithDiscount * qyt).toFixed(2)}</span></td>
      <td>
        <img id=${id} class="btn btn-sm btn-sm-close" src="./assets/icons/close.png" alt="close"/>
      </td>
    </tr>`
};
