export const STORE = (function() {
  let products = [];
  
  function setProducts(productsPerCategory) {
    productsPerCategory.forEach(category => products = [...products, ...category.products])
  }

  function getProducts() {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts;
  }
  return {
    setProducts,
    getProducts
  }
})()