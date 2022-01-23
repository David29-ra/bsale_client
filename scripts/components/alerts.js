export const ALERTS = (function (){
  function added() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'success',
      title: 'Your product has been added to the cart!',
      showConfirmButton: false,
      timer: 1200
    })
  }

  function alreadyinCart() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'info',
      title: 'Your product is already in the cart!',
      showConfirmButton: false,
      timer: 1200
    })
  }

  function deleted() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'warning',
      title: 'Your product has been deleted from the cart!',
      showConfirmButton: false,
      timer: 1200
    })
  }

  function makeShop() {
    return Swal.fire({
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Your purchase has been made!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  function emptyCart() {
    return Swal.fire({
      position: 'center',
      width: 300,
      icon: 'warning',
      title: 'Your cart is empty!',
      showConfirmButton: false,
      timer: 1000
    })
  }
  return {
    added,
    alreadyinCart,
    deleted,
    makeShop,
    emptyCart
  }

})()