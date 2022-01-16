export const STORE = (function() {
  let products = [];
  let productsByCategory = [];

  function setProductsByCategory(apifetch) {
    productsByCategory = apifetch;
  }

  function getProductsByCategory() {
    return [...productsByCategory];
  }
  
  function setProducts(productsPerCategory) {
    productsPerCategory.forEach(category => products = [...products, ...category.products])
  }

  function getProducts() {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts;
  }
  return {
    setProducts,
    getProducts,
    setProductsByCategory,
    getProductsByCategory
  }
})()