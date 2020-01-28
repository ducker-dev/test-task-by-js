class Product {
  constructor(id, price) {
    this.id = id;
    this.price = price;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  withDiscount(percent) {
    var discountedPrice = this.price - (percent / 100) * this.price;
    this.discountedPrice = discountedPrice;
    return this;
  }
}

class Shop {
  constructor() {
    this.products = [];
  }

  addProducts(products) {
    var newProducts = products.map(product => {
      return new Product(product.id, product.price)
    });
    this.products = this.products.concat(newProducts);
  }

  getProduct(id) {
    return this.products.find(product => {
      return product.id === id;
    });
  }
}

var products = [
  {
    id: 3,
    name: "Cake",
    price: 333,
    description: "The tastiest cake in the world."
  },
  {
    id: 5,
    name: "Petroleum",
    price: 2.977,
    description: "Black gold."
  },
  {
    id: 8,
    name: "Moscow metro logo",
    price: 117000000,
    description: "Remove circle from logo"
  }
];
var shop = new Shop();
shop.addProducts(products);

console.log(shop);
console.log(
  shop
    .getProduct(5)
    .setPrice(3224)
    .withDiscount(10).discountedPrice === 2901.6
);
