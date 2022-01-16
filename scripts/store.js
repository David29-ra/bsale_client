export const STORE = (function() {
  let products = [];
  let productsByCategory = [];
  let categories = []

  function setProductsByCategory(apifetch) {
    productsByCategory = apifetch;
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
  return {
    getProducts,
    getShuffledProducts,
    setProductsByCategory,
    getProductsByCategory,
    getCategories
  }
})();