'use strict';

const createBtn = document.querySelector('.createBtn');
const addContact = document.querySelector('.add-contact');
const container = document.querySelector('.container');
const contact = document.querySelector('.contact');
const charts = document.querySelector('.Charts');
const map = document.querySelector('.map');
const saveBtn = document.querySelector('.saveBtn');

const saveFirstName = document.querySelector('.saveFirstName');
const saveLastName = document.querySelector('.saveLastName');
const saveStatusName = document.querySelector('.saveStatusName');

const hideShow = function () {
    container.classList.add('hidden');
    addContact.classList.remove('hidden');
    map.classList.add('hidden');
};

createBtn.addEventListener('click', hideShow);
contact.addEventListener('click', hideShow);

const arr = [];

const store = function () {
    arr.push(document.querySelector('.valueFirst').value);
    arr.push(document.querySelector('.valueLast').value);
};

saveBtn.addEventListener('click', function () {
    store();
    
    // Update textContent after the user clicks the "Save" button
    saveFirstName.textContent = arr[1] || ''; // Use the first value in the array
    saveLastName.textContent = arr[2] || ''; // Use the second value in the array
    saveStatusName.textContent = arr[0] || ''; // Use the third value in the array
});

const radioButtons = document.querySelectorAll('.radiovalue');

radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        if (this.checked) {
            arr.push(this.value);
        }
    });
});

charts.addEventListener('click', function () {
    map.classList.remove('hidden');
    container.classList.add('hidden');
    addContact.classList.add('hidden');
});