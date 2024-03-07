function orders(product, quantity) {
  const productInfo = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };

  let totalPrice = productInfo[product] * quantity;
  console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
