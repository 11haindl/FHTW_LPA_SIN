document.addEventListener("DOMContentLoaded", function (event) {
    document.body.setAttribute("style", " height: " + window.innerHeight + "px");

});

document.getElementById("submit-form").addEventListener("click", submitForm);

function submitForm() {
    let data = {
        "firstname": document.getElementsByName("firstname")[0].value,
        "lastname": document.getElementsByName("lastname")[0].value,
        "birthDate": document.getElementsByName("birth-date")[0].value,
        "passportNumber": document.getElementsByName("passport")[0].value,
        "gender": document.querySelector('input[name="sex"]:checked').value,
        "reason": document.getElementsByName("reason")[0].value
    }

    let outputString = "Ausgabe: \n";
    for (let key in data) {

        if (key != "reason") {
            outputString += "\n- " + key + ": " + data[key];
        } else {
            outputString += "\n Begründung: " + data[key] ;
        }
    }

    alert(outputString);
}
