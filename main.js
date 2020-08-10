"use strict";

// Coffees array
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// Retrieves local storage if available
if (window.localStorage.getItem('coffeeArray') !== null) {
    coffees = JSON.parse(window.localStorage.getItem('coffeeArray'));
}

// Display default coffee list
let coffeeListContainer = document.getElementById("coffee-list-container");
coffeeListContainer.innerHTML = displayCoffee(coffees, "all");

// If user changes the selection input, it will update the coffee list
let coffeeQuerySelection = document.getElementById("query-roast-selection");
coffeeQuerySelection.addEventListener("change", function () {
    if (coffeeQuerySelection.value === "light") {
        // shows light roasts
        coffeeListContainer.innerHTML = displayCoffee(coffees, coffeeQuerySelection.value);
    } else if (coffeeQuerySelection.value === "medium") {
        // shows medium roasts
        coffeeListContainer.innerHTML = displayCoffee(coffees, coffeeQuerySelection.value);
    } else if (coffeeQuerySelection.value === "dark") {
        // shows dark roastsfor (let i=0; i<str.length;i++){
        if (str[i].toLowerCase() === cha.toLowerCase()){
            num++;
        }
        coffeeListContainer.innerHTML = displayCoffee(coffees, coffeeQuerySelection.value);
    } else {
        // shows default coffee list
        coffeeListContainer.innerHTML = displayCoffee(coffees, coffeeQuerySelection.value);
    }
});

// If the user types input, it will update the coffee list
let coffeeSearch = document.getElementById("coffee-query-input");
coffeeSearch.addEventListener("keyup", function () {
    if (coffeeSearch.value !== "") {
        coffeeListContainer.innerHTML = displayCoffeeString(coffees, coffeeSearch.value, coffeeQuerySelection.value);
    } else {
        coffeeListContainer.innerHTML = displayCoffee(coffees, coffeeQuerySelection.value);
    }
});


// Add Coffee to list functionality
// Once the user clicks "SUBMIT", it will add the coffee based on the information entered by user
let AddcoffeeBtn = document.getElementById("add-submit-btn");
let Addcoffee = document.getElementById("coffee-add-input");
let AddcoffeeRoast = document.getElementById("add-roast-selection");

AddcoffeeBtn.addEventListener("click", function (e) {
    // the next id will be coffees.length+1, roast will be the value of roast selected, name will be the name inputed
    e.preventDefault();
    let coffeeAddName = Addcoffee.value;
    if (coffeeAddName === "") {
        alert("Please enter a coffee name.");
    } else {
        let coffee = {
            id: coffees.length + 1,
            name: coffeeAddName,
            roast: AddcoffeeRoast.value
        };
        coffees.push(coffee);
        window.localStorage.setItem('coffeeArray', JSON.stringify(coffees));
        console.log(localStorage.getItem('coffeeArray'));
        coffeeListContainer.innerHTML = displayCoffee(coffees, "all");
        alert(`Coffee: ${coffee.name}, Roast: ${coffee.roast} is added!`);
    }
});

// display coffee by search input
function displayCoffeeString(coffees, searchString, roast) {
    let htmlString = "";
    coffees.forEach(function (coffee) {
        if (coffee.roast === roast) {
            if (coffee.name.toLowerCase().includes(searchString.toLowerCase())) {
                htmlString += "<div class='d-flex align-items-start flex-column coffee-item my-3 mx-3'>" + "<h3 class='mx-2'>" + coffee.name + "</h3>" +
                    "<p class='my-0 mx-3'>" + coffee.roast + "</p>" + "</div>";
            }
        } else if (roast === "all") {
            if (coffee.name.toLowerCase().includes(searchString.toLowerCase())) {
                htmlString += "<div class='d-flex align-items-start flex-column coffee-item my-3 mx-3'>" + "<h3 class='mx-2'>" + coffee.name + "</h3>" +
                    "<p class='my-0 mx-3'>" + coffee.roast + "</p>" + "</div>";
            }
        }
    });
    return htmlString;
}

// display coffee in coffee-list-container based on roast
function displayCoffee(coffees, roast) {
    let htmlString = "";
    coffees.forEach(function (coffee) {
        if (coffee.roast === roast) {
            htmlString += "<div class='d-flex align-items-start flex-column coffee-item my-3 mx-3'>" + "<h3 class='mx-2'>" + coffee.name + "</h3>" +
                "<p class='my-0 mx-3'>" + coffee.roast + "</p>" + "</div>";
        } else if (roast === "all") {
            htmlString += "<div class='d-flex align-items-start flex-column coffee-item my-3 mx-3'>" + "<h3 class='mx-2'>" + coffee.name + "</h3>" +
                "<p class='my-0 mx-3'>" + coffee.roast + "</p>" + "</div>";
        }
    });
    return htmlString;

}