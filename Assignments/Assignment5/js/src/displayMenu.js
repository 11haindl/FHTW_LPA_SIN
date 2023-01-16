class displayMenu {
    /* 
    constructor for creating new displayMenu object,
    which has a menuModel object and constant for a empty grid item
    */
    constructor() {
        this.menu = new menuModel();
        this.emptyGridItem = '<div class="grid-item"></div>';
    }

    /* 
    if the products category is SIDE_DISH, build radio buttons additionally to the product name,
    else just return the product name
    */
    buildSides(product) {
        let result = "";
        if (product.category == CATEGORIES.SIDE_DISH) {
            result =
                '<label for="side-dish' + product.id + '">' +
                '<input type="radio" class="sides" name="sides" id="side-' + product.id + '" value="' + product.id + '">'
                + product.name +
                '</label>';
        } else {
            result = product.name;
        }
        return result;
    }

    /* 
    if the products category is the same as the current category to display,
    build a grid containing product name, price and an input field
    */
    buildProductOfCategory(product, category) {
        let result = "";
        if (product.category == CATEGORIES[category]) {
            result +=
                '<div class="grid-item">' +
                this.buildSides(product) +
                '</div>' +
                '<div class="grid-item">' +
                parseFloat(product.price).toFixed(2) + ' &euro;' +
                '</div>' +
                '<div class="grid-item">' +
                '<input type="number" id="quantity-' + product.id + '" name="quantity-' + product.id + '" value="0" min="0">' +
                '</div>';
        }
        return result;
    }

    /*
    loop through all products and build HTML string depending on category of the product
    */
    buildProducts(category) {
        let products = this.menu.products;
        let result = "";
        for (let product of products) {
            result += this.buildProductOfCategory(product, category);
        }
        return result;
    }

    /* 
    build a string (HTML) for displaying output :
    loop through all categories in enum productCategories and build headlines,
    call method buildProducts(),
    */
    buildMenuToDisplay() {
        let displayMenu = "";
        for (let category of Object.keys(CATEGORIES)) {
            displayMenu +=
                '<div class="grid-item">' +
                '<h3>' + CATEGORIES[category] + '</h3>' +
                '</div>' +
                this.emptyGridItem +
                this.emptyGridItem;
            displayMenu += this.buildProducts(category);
        }
        return displayMenu;
    }

    /* 
    displays output to html
    */
    displayOutput(){
        let output = document.getElementById("menu");
        output.innerHTML = this.buildMenuToDisplay();
    }


}