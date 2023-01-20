class claculation {

    constructor(){
        this.setLimit(0);
    }

    setLimit(limit){
        this.limit = limit;
    }

    claculate(){
        let inputLimit = document.getElementById("limit");
        let outputList = new list();
        for(let i = 1; i <= inputLimit.value; i++){
            outputList.addElement(Math.pow(i, 2));
        }
        return outputList;
    }
}