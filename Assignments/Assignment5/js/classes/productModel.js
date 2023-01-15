class productModel{
            
    constructor(id, name, price, category){
        this.setId(id);
        this.setName(name);
        this.setPrice(price);
        this.setCategory(category);
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    setName(name){
        this.name = name;
    }

    setId(id){
        this.id = id;
    }

    setPrice(price){
        this.price = price;
    }

    setCategory(category){
        this.category = category;
    }
}