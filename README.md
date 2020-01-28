# Тестовое задание на проверку знаний по JS

## Необходимо написать классы (конструкторы объектов). Код из примера должен вывести в консоль true.

### Описание классов.
1. Класс Product. Содержит минимальную информацию о товаре:
-  Cвойство id: любое число (идентификатор товара);
-  Cвойство price: любое число (цена товара);
-  Метод setPrice(price): устанавливает новую цену и возвращает товар;
-  Метод withDiscount(percent): возвращает новый экземпляр товара с дополнительным свойством discountedPrice, в котором рассчитана стоимость товара с учетом указанной скидки.
2. Класс Shop. Содержит товары и функции управления:
-  Свойство products: массив объектов класса Product;
-  Метод addProducts(products): принимает массив products и добавляет продукты в магазин;
-  Метод getProduct(id): возвращает продукт по указанному идентификатору.

### Пример.

```
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
console.log(
  shop
    .getProduct(5)
    .setPrice(3224)
    .withDiscount(10).discountedPrice === 2901.6
);
```

