class orderProductModel{
    /* 
    constructor for creating new orderProductModel object,
    which has a product object and a quantity as properties.
    it is a connection from order to product (1:n)
    */
    constructor(product, quanitiy){
        this.setProduct(product);
        this.setQuantity(quanitiy);
    }

    // setter for product
    setProduct(product){
        this.product = product;
    }

    // setter for quantity
    setQuantity(quanitiy){
        this.quanitiy = quanitiy;
    }
}