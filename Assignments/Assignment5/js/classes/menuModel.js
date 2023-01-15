class menuModel{

    constructor(){
        this.products = [];
        this.initMenu();
    }

    initMenu(){
        this.products.push(new productModel(0, "keine Beilage", "", CATEGORIES.SIDE_DISH));
        this.products.push(new productModel(1, 'Cheeseburger', 5.00, CATEGORIES.MAIN_DISH));
        this.products.push(new productModel(2, "Salat", 2.00, CATEGORIES.SIDE_DISH));
        this.products.push(new productModel(3, "Pommes", 3.50, CATEGORIES.SIDE_DISH));
        this.products.push(new productModel(4, "Cola", 3.00, CATEGORIES.DRINK));
    }
}