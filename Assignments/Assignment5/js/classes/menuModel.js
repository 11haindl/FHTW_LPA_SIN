class menuModel{
    /* 
    constructor for creating new menuModel object,
    which has a list of products, getting filled with method initMenu()
    */
    constructor(){
        this.products = [];
        this.initMenu();
    }

    // initialize menu with products
    initMenu(){
        this.products.push(new productModel(1, 'Cheeseburger', 5.00, CATEGORIES.MAIN_DISH));
        this.products.push(new productModel(2, "Salat", 2.00, CATEGORIES.SIDE_DISH));
        this.products.push(new productModel(3, "Pommes", 3.50, CATEGORIES.SIDE_DISH));
        this.products.push(new productModel(4, "Cola", 3.00, CATEGORIES.DRINK));
        this.products.push(new productModel(5, "keine Beilage", 0.00, CATEGORIES.SIDE_DISH));
    }
}