import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCart from '../DisplayCart/DisplayCart';

import { getStoredCart } from '../Uitilities/fakedb';

const HandleJobCart = () => {
  const [cart, setCart] = useState([]);
  const jData = useLoaderData();
/*   console.log(jData); */
  useEffect(() => {
    const savedCart = getStoredCart();
    let newArr = [];
  for (const id in savedCart) {
    const foundProduct = jData.find(product => product.id == id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];

      newArr.push(foundProduct)

      
    }
 
  }
    setCart(newArr)
},[])


/*   console.log(cart); */
 
  return (
    <div>
     
      {
        cart.map(job=><DisplayCart key={job.id} job={job}></DisplayCart>)
      }
    </div>
  );
};

export default HandleJobCart;