class processOrder {
  /*
  get quantities of all products and initialize new menuModel and orderModel objects
  loop through all quantities and call method loopThroughProducts()
  */
  initOrder() {
    let quantities = Array.from(document.querySelectorAll('[type="number"]'));
    let menu = new menuModel();
    let order = new orderModel();
    for (let quantity of quantities) {
      this.loopThroughProducts(menu, quantity, order);
    }
    return order;
  }

  /* 
  loop through all Products and call method addProductAndQuantityToOrder()
  for every product in menu
  */
  loopThroughProducts(menu, quantity, order) {
    for (let product of menu.products) {
      this.addProductAndQuantityToOrder(product, quantity, order);
    }
  }

  /* 
  if quantity belongs to the right product, create a new orderProductModel object
  with current product and its ordered quantity
  add the created object to the current order
  */
  addProductAndQuantityToOrder(product, quantity, order) {
    if (("quantity-" + product.id) == quantity.id) {
      let orderProd = new orderProductModel(product, quantity.value);
      order.addOrderProduct(orderProd);
    }
  }

  /*
  checks if there is a discount and returns a appropriate string
  according to weater the discount is given or not
  */
  getDiscountString(discountValue) {

    if (discountValue != 0) {
      return "Rabatt: " + discountValue + " %";
    } else {
      return "kein Rabatt";
    }
  }

  /*
  returns the given discount
  */
  getDiscount(sum) {
    if (sum > 10) {
      return 15;
    } else {
      return 0;
    }
  }

  /*
  method for commercial rounding
  */
  round2Decimals(number) {
    let helper = number * 100;
    let result = Math.round(helper) / 100;
    return result;
  }

  /*
  if the ordered quantity is greater than 0 return HTML talbe row
  filled in with product name, price per product, quantity and total price
  */
  buildTableRowsOfQuantitiesGreaterThanZero(quantity, product) {
    let result = "";
    if (quantity > 0) {
      let price = parseFloat(product.price).toFixed(2);
      result +=
        "<tr>" +
        "<td>" + product.name + "</td>" +
        "<td>" + price + " &euro;</td>" +
        "<td>" + quantity + "</td>" +
        "<td>" + parseFloat(price * quantity).toFixed(2) + " &euro;</td>" +
        "</tr>";
    }
    return result;
  }

  /*
  if the ordered quantity is greater than 0 return price per product
  otherwise return 0.00
  */
  getPriceOfQuantitiesGreaterThanZero(quantity, product) {
    if (quantity > 0) {
      return parseFloat(product.price).toFixed(2);
    } else {
      return 0.00;
    }
  }

  /*
  for every item in order make a table row and calculate the total price.
  calculate the discount and build the HTML table body with discount and rounded values
  */
  buildTableBody() {
    let order = this.initOrder();
    let tableBody = "";
    let total = 0.00;
    for (let item of order.orderProducts) {
      let quantity = item.quanitiy;
      let product = item.product;
      tableBody += this.buildTableRowsOfQuantitiesGreaterThanZero(quantity, product);
      let price = this.getPriceOfQuantitiesGreaterThanZero(quantity, product);
      total += price * quantity;
    }

    let calculatedDiscount = total * this.getDiscount(total) / -100;
    tableBody +=
      "<tr>" +
      "<td><b>Zwischensumme</b></td>" +
      "<td></td>" +
      "<td></td>" +
      "<td><b>" + parseFloat(this.round2Decimals(total)).toFixed(2) + " &euro;</b></td>" +
      "</tr>" +
      "<tr>" +
      "<td><b>" + this.getDiscountString(this.getDiscount(total)) + "</b></td>" +
      "<td></td>" +
      "<td></td>" +
      "<td><b>" + parseFloat(this.round2Decimals(calculatedDiscount)).toFixed(2) + " &euro;</b></td>" +
      "</tr>" +
      "<tr>" +
      "<td><b>Gesamtbetrag</b></td>" +
      "<td></td>" +
      "<td></td>" +
      "<td><b>" + parseFloat(this.round2Decimals(total + calculatedDiscount)).toFixed(2) + " &euro;</b></td>" +
      "</tr>";
    return tableBody;
  }

  /*
  build structure of table to be displayed
  */
  buildOutputTable() {

    let table =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Produkt</th>" +
      "<th>Preis</th>" +
      "<th>Menge</th>" +
      "<th>Gesamt</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      this.buildTableBody() +
      "</tbody>" +
      "</table>";

    return table;
  }

  /*
  display the built table
  */
  output() {
    let table = this.buildOutputTable();
    let output = document.getElementById("output-area");
    output.innerHTML = table;
  }
}