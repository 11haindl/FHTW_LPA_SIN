class Menu{

    constructor(){
        this.products = [];
        this.initMenu();
    }

    initMenu(){
        this.products.push(new Product(1, 'Cheeseburger', 5.00, CATEGORIES.MAIN_DISH));
        this.products.push(new Product(2, "Salat", 2.00, CATEGORIES.SIDE_DISH));
        this.products.push(new Product(3, "Pommes", 3.50, CATEGORIES.SIDE_DISH));
        this.products.push(new Product(4, "Cola", 3.00, CATEGORIES.DRINK));
    }
}