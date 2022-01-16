export const cartItem = (product) => {
  const {id, name, url_image, price, discount} = product;
  const priceWithDiscount = discount == 0 ? price.toFixed(2) : (price * 0.01 * (100 - discount)).toFixed(2);
  return `
    <tr>
      <td class="w-25">
        <img src="${url_image}" class="img-fluid img-thumbnail" alt="Sheep">
      </td>
      <td>${name}</td>
      <td>${priceWithDiscount}</td>
      <td class="qty"><input type="text" class="form-control" id="input1" value="1"></td>
      <td>${priceWithDiscount}</td>
      <td>
        <img class="btn btn-sm btn-sm-close" src="./assets/icons/close.png" alt="close"/>
      </td>
    </tr>`
};
