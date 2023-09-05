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
        // Fetch data from api
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            // Update the results Heading
            resultsHeading.innerHTML = `<h2>Search results for ${searchText}</h2>`;
            // check if anny results return form api
            if(data.meals === null){
                resultsHeading.innerHTML = `<h2>No results for ${searchText}</h2>`;

            }else{
                meals.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                        <img src=""${meal.strMealThumb} alt="${meal.strMeal}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `)
                .join('')
            }
        });
        // clear the search text
        search.value='';
    }else{
        alert('Please enter search keyword')
    };
};




//Event Listeners
//1 Listen for meal from submit
submit.addEventListener('submit', searchMeal);
