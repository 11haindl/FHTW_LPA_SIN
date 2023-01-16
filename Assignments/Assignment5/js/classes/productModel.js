class productModel{
    /* 
    constructor for creating new productModel object,
    which has an id, a name, a price and a category as properties
    */
    constructor(id, name, price, category){
        this.setId(id);
        this.setName(name);
        this.setPrice(price);
        this.setCategory(category);
    }

    // setter for id
    setId(id){
        this.id = id;
    }

    // setter for name
    setName(name){
        this.name = name;
    }

    // setter for price
    setPrice(price){
        this.price = price;
    }

    // setter for category
    setCategory(category){
        this.category = category;
    }
}