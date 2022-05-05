
let form = document.forms[0]; //document.forms['survey-form']

console.log(form.elements);
console.log(form.elements['name']);
console.log(form.elements['number']);

form.elements['name'].value = "Tom Hardy";

form.elements['number'].addEventListener("input", event => {
    console.log(event.target.value);
});

const dropdown = document.getElementById('dropdown');
dropdown.value = 'learner';

const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes[1].checked = true;
checkboxes[4].checked = true;

//this won't work, only for testing
// const checkboxList = document.getElementsByClassName('form-check-input');
// checkboxList[3].checked = true;

/* 
const listofItems = document.getElementById('abc');
const checkboxes = listofItems.getElementsByClassName('form-check-input');
*/




