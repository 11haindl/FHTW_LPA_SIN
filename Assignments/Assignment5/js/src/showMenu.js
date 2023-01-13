class showMenu{

    constructor(){
        this.menu = new Menu();
        this.emptyGridItem = '<div class="grid-item"></div>';
    }

    buildRadioForSides(product){
        let result = "";
        if(product.category == CATEGORIES.SIDE_DISH){
            result = 
            '<label for="side-dish'+ product.id +'">' +
                '<input type="radio" class="sides" name="sides" id="side-'+ product.id +'" value="side-dish'+ product.id +'">' 
                + product.name +
            '</label>';

            window.onload = function(){
                let sides = document.getElementsByName("sides");
                for(let sideDish of sides){
                    let sideDishId = sideDish.getAttribute("id");
                    let inputId = "quantity-" + sideDishId.slice(5, sideDishId.length);
                    console.log(inputId);
                    document.getElementById(inputId).disabled = true;
                    sideDish.onclick = function(){
                        document.getElementById(inputId).disabled = false;
                    }
                }
            }
        } else {
            result = product.name;
        }
        return result;
    }


    buildProductOfCategory(product, category){
        let result = "";
        if(product.category == CATEGORIES[category]){
                result += 
            '<div class="grid-item">' + 
                this.buildRadioForSides(product) +
            '</div>' +
            '<div class="grid-item">' + 
                product.price + ' &euro;' +
            '</div>' +
            '<div class="grid-item">' +
                '<input type="number" id="quantity-' + product.id + '" name="quantity-' + product.id + '" value="0" min="0">' +
            '</div>';
        }
        return result;
    }

    buildProducts(products, category){
        let result = "";
        for(let product of products){
            result += this.buildProductOfCategory(product, category);
        }
        return result;
    }

    buildMenuToDisplay(){
        let displayMenu = "";
        let products = this.menu.products;        
        for(let category of Object.keys(CATEGORIES)){
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