const search = document.getElementById('search');
const submit = document.getElementById('submit');
const generate = document.getElementById('generate');
const resultsHeading = document.getElementById('results-heading');
const meals = document.getElementById('meals');
const selectedMeal =  document.getElementById('selected-meal');

// Function to search the meal using the api

function searchMeal(e){
    // prevent form submission and redirect
    e.preventDefault();
    //Get the value from search field 
    const searchText = search.value;
    // check if search input field is empty
    if (searchText.trim()){
        console.log(searchText);
    }else{
        alert('Please enter search keyword')
    };
};




//Event Listeners
//1 Listen for meal from submit
submit.addEventListener('submit', searchMeal);
