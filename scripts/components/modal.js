import { STORE } from "../store.js";
import { cartItem } from "./cartItem.js";

export const modalCart = () => {
  return `
    <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:none">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Your Shopping Cart
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-image">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table> 
            <div class="d-flex justify-content-end">
              <h5>Total: <span class="price text-success">89$</span></h5>
            </div>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Checkout</button>
          </div>
        </div>
      </div>
    </div>`
}