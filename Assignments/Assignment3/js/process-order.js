function initOrder() {
  let numberOfCheeseburgers = document.getElementById("cheesebuger-quantity").value;
  let numberOfSalads = document.getElementById("salad-quantity").value;
  let numberOfFries = document.getElementById("fries-quantity").value;
  let numberOfCokes = document.getElementById("coke-quantity").value;

  let items = [
    ["Cheeseburger", 5.00, numberOfCheeseburgers], 
    ["Salat", 2.00, numberOfSalads], 
    ["Pommes", 3.50, numberOfFries], 
    ["Cola", 3.00, numberOfCokes]];

  return items;
}

function getDiscountString(discountValue) {

  if(discountValue != 0){
    return "Rabatt: " + discountValue + " %"; 
  } else {
    return "kein Rabatt";
  }
}

function getDiscount(sum){
  if(sum > 10){
    return 15;
  } else {
    return 0;
  }
}

function round2Decimals(number){
  let helper = number * 100;
  let result = Math.round(helper) / 100;
  return result;
}

function buildTableBody(){
  let items = initOrder();
  let tableBody = "";
  let total = 0.00;
  for(item of items){
    if(item[2] > 0){
      let price = parseFloat(item[1]).toFixed(2);
      tableBody += 
      "<tr>" +
        "<td>" + item[0] + "</td>" +
        "<td>" + price + " &euro;</td>" +
        "<td>" + item[2] + "</td>" +
        "<td>" + parseFloat(price * item[2]).toFixed(2) + " &euro;</td>" +
      "</tr>";
      total += price * item[2];
    }
  }  

  calculatedDiscount = total * getDiscount(total) / -100;


  tableBody +=
  "<tr>" +
    "<td><b>Zwischensumme</b></td>" +
    "<td></td>" +
    "<td></td>" +
    "<td><b>" + round2Decimals(total) + " &euro;</b></td>" +
  "</tr>" +
  "<tr>" +
    "<td><b>" + getDiscountString(getDiscount(total)) + "</b></td>" +
    "<td></td>" +
    "<td></td>" +
    "<td><b>" + round2Decimals(calculatedDiscount) + " &euro;</b></td>" +
  "</tr>" +
  "<tr>" +
    "<td><b>Gesamtbetrag</b></td>" +
    "<td></td>" +
    "<td></td>" +
    "<td><b>" + round2Decimals(total + calculatedDiscount) + " &euro;</b></td>" +
  "</tr>";

  return tableBody;
}

function buildOutputTable(){
  
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
      buildTableBody() +
    "</tbody>" +
  "</table>";

  return table;
}

function output(){
  let table = buildOutputTable();
  let output = document.getElementById("output-area");
  output.innerHTML = table;
}

function handleInputSides(){
    if(document.getElementById("salad").checked){
      document.getElementById("salad-quantity").disabled = false;
    } else {
      document.getElementById("salad-quantity").value = 0;
      document.getElementById("salad-quantity").disabled = true;
    }

    if(document.getElementById("fries").checked){
      document.getElementById("fries-quantity").disabled = false;
    } else {
      document.getElementById("fries-quantity").value = 0;
      document.getElementById("fries-quantity").disabled = true;
    }
}