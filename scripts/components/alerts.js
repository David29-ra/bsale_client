export const ALERTS = (function (){
  function added() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'success',
      title: 'Your product has been added to the cart!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function alreadyinCart() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'info',
      title: 'Your product is already in the cart!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function deleted() {
    return Swal.fire({
      position: 'top-end',
      width: 300,
      icon: 'warning',
      title: 'Your product has been deleted from the cart!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return {
    added,
    alreadyinCart,
    deleted
  }

})()