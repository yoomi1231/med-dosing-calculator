
// declare global variables (state variables)
let weight; // let weight = ""; default value
let age;
let medications;
let outputStatement;
let weightUnit;
let modal;
let btn;

// intialization
window.addEventListener('load', () => {
    weight = document.querySelector('#weight');
    weightUnit = document.querySelector('#weightUnit');
    age = document.querySelector('#age');
    medications = document.querySelector('#medications');
    outputStatement = document.querySelector(".output");
    modal = document.querySelector('#myModal');
    btn = document.querySelector('#myBtn');
});



const calculateDose = () => {
    modal.style.display = "block";

    let ageValue = parseInt(age.value);
    const ageUnitValue = ageUnit.value;
    let weightValue = parseFloat(weight.value);
    const weightUnitValue = weightUnit.value;
    const medicationValue = medications.value;

    const minApapDose = 10 * weightValue;
    const minApapDoseVol = (minApapDose * 5 / 160).toFixed(1);
    const maxApapDose = 15 * weightValue;
    const maxApapDoseVol = (maxApapDose * 5 / 160).toFixed(1);
    const minMotrinDose = 5 * weightValue;
    const maxMotrinDose = 10 * weightValue;
    const minMotrinDoseVol = (minMotrinDose * 5 / 100).toFixed(1);
    const maxMotrinDoseVol = (maxMotrinDose * 5 / 100).toFixed(1);
    const minMotrinInfantDoseVol = (minMotrinDose * 1.25 / 50).toFixed(2);
    const maxMotrinInfantDoseVol = (maxMotrinDose * 1.25 / 50).toFixed(2);
   
    

    if (weightValue !== '' && weightUnitValue === 'lbs') {
        weightValue = weightValue / 2.21;
    }


    if (isNaN(weightValue) || isNaN(ageValue)) {
        alert('not valid');
    } else if (medicationValue === 'Tylenol') {
        outputStatement.innerHTML = `
        ${medicationValue} is safe to use in a ${ageValue} ${ageUnitValue} old.<br>
        The recommended dose is between ${minApapDose}mg(${minApapDoseVol}ml) and ${maxApapDose}mg(${maxApapDoseVol}ml) every 4-6 hours.
        `;
    } else if (medicationValue === 'Motrin') {
        if (ageValue <= 5 && ageUnitValue === 'month') {
            outputStatement.innerHTML = `
            ${medicationValue} cannot be used for ${ageValue} ${ageUnitValue} old.
            `;
        } else {
            outputStatement.innerHTML = `
            ${medicationValue} is safe to use in a ${ageValue} ${ageUnitValue} old.<br>
            The recommended dose is between ${minMotrinDose}mg(${minMotrinDoseVol}ml) and ${maxMotrinDose}mg(${maxMotrinDoseVol}ml) every 6-8 hours.
            `; 
        }
    } else if (medicationValue === 'Motrin-Infant') {
        if (ageValue <= 5 && ageUnitValue === 'month') {
            outputStatement.innerHTML = `
            ${medicationValue} cannot be used for ${ageValue} ${ageUnitValue} old.
            `;
        } else {
        outputStatement.innerHTML = `
        ${medicationValue} is safe to use in a ${ageValue} ${ageUnitValue} old.<br>
        The recommended dose is between ${minMotrinDose}mg(${minMotrinInfantDoseVol}ml) and ${maxMotrinDose}mg(${maxMotrinInfantDoseVol}ml) every 6-8 hours.
        `; 
        }
    }
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}