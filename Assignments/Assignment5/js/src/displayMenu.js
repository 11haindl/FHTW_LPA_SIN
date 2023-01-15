class displayMenu {

    constructor() {
        this.menu = new menuModel();
        this.emptyGridItem = '<div class="grid-item"></div>';
    }

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

    buildProducts(products, category) {
        let result = "";
        for (let product of products) {
            result += this.buildProductOfCategory(product, category);
        }
        return result;
    }

    buildMenuToDisplay() {
        let displayMenu = "";
        let products = this.menu.products;
        for (let category of Object.keys(CATEGORIES)) {
            displayMenu +=
                '<div class="grid-item">' +
                '<h3>' + CATEGORIES[category] + '</h3>' +
                '</div>' +
                this.emptyGridItem +
                this.emptyGridItem;
            displayMenu += this.buildProducts(products, category);
        }

        let output = document.getElementById("menu");
        output.innerHTML = displayMenu;
    }


}