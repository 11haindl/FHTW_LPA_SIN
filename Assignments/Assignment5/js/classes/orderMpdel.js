class orderModel{
    /* 
    constructor for creating new orderModel object,
    which has a list of orderProduct objects
    */
    constructor(){
        this.orderProducts = [];
    }

    // pushes an orderProduct object to the orderProducts list
    addOrderProduct(orderProduct){
        this.orderProducts.push(orderProduct);
    }
}