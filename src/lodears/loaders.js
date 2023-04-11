import { getShoppingCart } from "../components/Uitilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch('/data.json');
  const products = await loadedProducts.json();



/*   const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart);
  const addedProduct = products.find(p => p.id === id)
  if (addedProduct) {
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct);
  }

  console.log(storedCart);
  console.log(products);
  return savedCart;
   */
}

export  default cartProductsLoader;