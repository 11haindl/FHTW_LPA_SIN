/*
window.onload was needed because the input was build dynamically. 
Otherwise I could not get access to the radio button group, 
which I need to enable/disable the correct input fileds

I loop through the radio button elements to iterate also through the relevant input fileds
and hide input fields that are not needed
*/
window.onload = function () {
    let sidesRadioGroup = document.getElementsByName("sides");
    let sidesInputFields = getInputFiedsToSideDishRadioButtions();

    for (let sideDishButton of sidesRadioGroup) {
        sideDishButton.onclick = function () {
            iterateThroughSideDishInputs(sidesInputFields);
        }
    }
    hideInput([5]);
}


/*
loop through input fields of the side dishes enable/disable input
*/
function iterateThroughSideDishInputs(sidesInputFields) {
    let checkedSideDish = document.querySelector('input[name="sides"]:checked').value;
    for (let sideDishInputField of sidesInputFields) {
        disableSideDishInput(sideDishInputField, checkedSideDish);
    }
}

/* 
check weater radio button is checked or not to enable or disable input field
*/
function disableSideDishInput(sideDishInputField, checkedSideDish) {
    if (sideDishInputField.name == "quantity-" + checkedSideDish) {
        changeInputField(sideDishInputField, 1, false);
    } else {
        changeInputField(sideDishInputField, 0, true);
    }
}

/* 
getting a list of input fields according to the side dish radio buttons,
set every input field disabled at the beginning
*/
function getInputFiedsToSideDishRadioButtions() {
    let sidesRadioGroup = document.getElementsByName("sides");
    let sidesInputFields = [];
    for (let sideDishButton of sidesRadioGroup) {
        let sideDishButtonId = sideDishButton.id;
        let sideDishInputId = "quantity-" + sideDishButtonId.slice(5, sideDishButtonId.length);
        let sideDishInputField = document.getElementById(sideDishInputId);
        changeInputField(sideDishInputField, 0, true);
        sidesInputFields.push(sideDishInputField);
    }
    return sidesInputFields;
}

/* 
enable/disable input field, set appropriate value
*/
function changeInputField(sideDishInputField, value, isDisabled){
    sideDishInputField.value = value;
    sideDishInputField.disabled = isDisabled;
}

/*
hide all input fields in given list
*/
function hideInput(ids){
    for(let id of ids){
        document.getElementById("quantity-" + id).hidden = true;
    }
}