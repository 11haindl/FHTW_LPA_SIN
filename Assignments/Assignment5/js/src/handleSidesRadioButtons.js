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

function iterateThroughSideDishInputs(sidesInputFields) {
    let checkedSideDish = document.querySelector('input[name="sides"]:checked').value;
    for (let sideDishInputField of sidesInputFields) {
        disableSideDishInput(sideDishInputField, checkedSideDish);
    }
}

function disableSideDishInput(sideDishInputField, checkedSideDish) {
    if (sideDishInputField.name == "quantity-" + checkedSideDish) {
        changeInputField(sideDishInputField, 1, false);
    } else {
        changeInputField(sideDishInputField, 0, true);
    }
}

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

function changeInputField(sideDishInputField, value, isDisabled){
    sideDishInputField.value = value;
    sideDishInputField.disabled = isDisabled;
}

function hideInput(ids){
    for(let id of ids){
        document.getElementById("quantity-" + id).hidden = true;
    }
}