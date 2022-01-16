export const STORE = (function() {
  let products = [];
  let productsByCategory = [];
  let categories = []
  let cart = [];

  function setProductsByCategory(datafetch) {
    productsByCategory = datafetch;
    productsByCategory.forEach(category => products = [...products, ...category.products])
    productsByCategory.forEach(category => categories = [...categories, category.name])
  }

  function getProductsByCategory() {
    return [...productsByCategory];
  } 

  function getProducts() {
    return [...products];
  }

  function getShuffledProducts() {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts;
  }

  function getCategories() {
    return [...categories];
  }

  function setCart(product) {
    cart = [...cart, product];
  }

  function getCart() {
    return [...cart];
  }
  return {
    getProducts,
    getShuffledProducts,
    setProductsByCategory,
    getProductsByCategory,
    getCategories,
    setCart,
    getCart
  }
})();