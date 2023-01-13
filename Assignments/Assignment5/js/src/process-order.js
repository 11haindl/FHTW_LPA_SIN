class processOrder {
  initOrder() {
    let quantities = Array.from(document.querySelectorAll('[type="number"]'));
    let menu = new Menu();
    let order = new Order();
    for (let quantity of quantities) {
      for(let product of menu.products){
        if(("quantity-" + product.id) == quantity.getAttribute("id")){
          let orderProduct = new OrderProduct(product, quantity.value);
          order.addOrderProduct(orderProduct);
        }
      }
    }
    return order;
  }

  getDiscountString(discountValue) {

    if (discountValue != 0) {
      return "Rabatt: " + discountValue + " %";
    } else {
      return "kein Rabatt";
    }
  }

  getDiscount(sum) {
    if (sum > 10) {
      return 15;
    } else {
      return 0;
    }
  }

  round2Decimals(number) {
    let helper = number * 100;
    let result = Math.round(helper) / 100;
    return result;
  }

  buildTableBody() {
    let order = this.initOrder();
    let tableBody = "";
    let total = 0.00;
    for (let item of order.orderProducts) {
      let quantity = item.quanitiy;
      let product = item.product;
      if (quantity > 0) {
        let price = parseFloat(product.price).toFixed(2);
        tableBody +=
          "<tr>" +
          "<td>" + product.name + "</td>" +
          "<td>" + price + " &euro;</td>" +
          "<td>" + quantity + "</td>" +
          "<td>" + parseFloat(price * quantity).toFixed(2) + " &euro;</td>" +
          "</tr>";
        total += price * quantity;
      }
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

  output() {
    let table = this.buildOutputTable();
    let output = document.getElementById("output-area");
    output.innerHTML = table;
  } 
}