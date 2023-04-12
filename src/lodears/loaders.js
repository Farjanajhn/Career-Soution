





const cartProductsLoader = async () => {
  const loadedProducts = await fetch('/data.json');
  const products = await loadedProducts.json();

  //if cart data is in database,you have to use async await
  return products;
  
  }
  //if you need to send two things
  //return [products,savedCart]
  //another option 
  //return {products,cart:savedcart}


 
 export default cartProductsLoader;       