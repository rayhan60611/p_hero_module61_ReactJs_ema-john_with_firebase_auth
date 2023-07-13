import { getShoppingCart } from "../utilities/localStorage";

const productDataLoader = async () => {
  try {
    const res = await fetch("../../db/products.json");
    const products = await res.json();

    // if data is in data base then you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    // console.log(savedCart);
    return savedCart;
  } catch (err) {
    return console.log(err);
  }
};

export default productDataLoader;
