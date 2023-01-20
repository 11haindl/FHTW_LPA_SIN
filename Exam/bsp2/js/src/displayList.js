class displayList {

    buildList(listToDisplay) {
        let listOutput = "";
        for (let listItem of listToDisplay.elements) {
            listOutput +=
                "<li>" + listItem + "</li>";
        }
        return listOutput;
    }

    display(){
        let calc = new claculation();
        let outputList = calc.claculate();
        let output = document.getElementById("output-area");
        output.innerHTML = this.buildList(outputList);
    }
}