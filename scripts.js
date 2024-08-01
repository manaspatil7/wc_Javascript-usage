// Variables and Operators: Calculator Function
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
    }

    document.getElementById('result').textContent = result;
}

// Event Listener for Calculator
document.getElementById('calculate').addEventListener('click', calculate);

// Conditions: Form Validation Function
function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        formMessage.textContent = 'Email is valid!';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please enter a valid email.';
        formMessage.style.color = 'red';
    }
}

// Event Listener for Form Validation
document.getElementById('userForm').addEventListener('submit', validateForm);

// Function to Display a List of Items based on Input
function displayItems() {
    const itemCount = parseInt(document.getElementById('itemCount').value, 10);
    const ul = document.getElementById('items');
    ul.innerHTML = ''; // Clear the list first

    const items = ['Apples', 'Bananas', 'Cherries', 'Dates', 'Elderberries'];
    
    if (!isNaN(itemCount) && itemCount > 0) {
        for (let i = 0; i < Math.min(itemCount, items.length); i++) {
            const li = document.createElement('li');
            li.textContent = items[i];
            ul.appendChild(li);
        }
    } else {
        ul.innerHTML = '<li>Please enter a valid number.</li>';
    }
}

// Event Listener for Displaying Items
document.getElementById('showItems').addEventListener('click', displayItems);

// Function to Greet User
function greetUser() {
    const name = document.getElementById('name').value;
    const greetingMessage = document.getElementById('greetingMessage');
    
    if (name.trim() !== '') {
        greetingMessage.textContent = `Hello, ${name}!`;
        greetingMessage.style.color = 'purple';
    } else {
        greetingMessage.textContent = 'Please enter your name.';
        greetingMessage.style.color = 'red';
    }
}

// Event Listener for Greeting User
document.getElementById('greet').addEventListener('click', greetUser);

// Mouse Click Event for Item List Input
document.getElementById('itemCount').addEventListener('click', function() {
    this.value = ''; // Clear the input field on click
});

// Keyboard Event for Item Count Input
document.getElementById('itemCount').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        displayItems(); // Display items when Enter key is pressed
    }
});

// Keyboard Event for Name Input
document.getElementById('name').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetUser(); // Greet user when Enter key is pressed
    }
});

// Loops: Initial Display of Items
document.addEventListener('DOMContentLoaded', () => {
    displayItems(); // Display default items on page load
});
