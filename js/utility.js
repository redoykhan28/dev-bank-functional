//function for textbox

function getElementsFromInput(elemId) {

    const input = document.getElementById(elemId);
    let inputValue = input.value;
    let inputValueParse = parseFloat(inputValue);

    input.value = '';

    return inputValueParse;
}

////function for section

function getElementFromSection(elemId2) {

    const section = document.getElementById(elemId2);
    let inputText = section.innerText;
    let inputTextParse = parseFloat(inputText);

    section.value = '';

    return inputTextParse;
}

function finalValue(elemId3, value) {

    const sectionStore = document.getElementById(elemId3);

    sectionStore.innerHTML = value;

}