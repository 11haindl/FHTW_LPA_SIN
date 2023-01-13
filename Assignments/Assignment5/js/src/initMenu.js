import { Menu } from '../classes/Menu.js';
import { Product } from '../classes/Product.js';

function initMenu(){
    const menu = new Menu();
    menu.addProductToMenu(new Product('Cheeseburger', 5.00, CATEGORIES.MAIN_DISH));
    menu.addProductToMenu(new Product("Salat", 2.00, CATEGORIES.SIDE_DISH));
    menu.addProductToMenu(new Product("Pommes", 3.50, CATEGORIES.SIDE_DISH));
    menu.addProductToMenu(new Product("Cola", 3.00, CATEGORIES.DRINK));

    return menu;
}