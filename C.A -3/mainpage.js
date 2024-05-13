const maxIng = 30;
let globalData = '';

const seachbutton = document.querySelector('.button');

const api_random = "https://www.themealdb.com/api/json/v1/1/random.php";
const randomMealText = document.querySelector('#meal-title');
const modalinstru = document.querySelector(".ingredient-head-list")
const modaltxt1 = document.querySelector(".modal-page")
const modalingr = document.querySelector(".ingredient-head-list")
const modalinstru2 = document.querySelector(".ingredient-head-list1")
const modaltxt12 = document.querySelector(".modal-page1")
const modalingr2 = document.querySelector(".ingredient-head-list1")


function setupClickEventListeners() {
    const resultImageContainers = document.querySelectorAll('.box');
    const resultTitle = document.querySelectorAll('.result-title');
    const modaltxt12 = document.querySelector(".modal-page1");
    const modalingr2 = document.querySelector(".ingredient-head-list1");

    resultImageContainers.forEach((element, i) => {
        element.addEventListener('click', () => {
            console.log(`Clicked on div with index: ${i}`);
            const getName = resultTitle[i].innerHTML;
            const api_category =
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(getName)}`;

            // Make a GET request to the MealDB API
            fetch(api_category)
                .then(response => response.json())
                .then(data => {
                    // Check if the expected data is available in the API response
                    if (data && data.meals && data.meals[0] && data.meals[0].strMeal) {
                        console.log(data.meals[0].strMeal);

                        // Instructions
                        const instructionsHTML =
                            `<b>Instructions:</b><br>${data.meals[0].strInstructions}<br>`;

                        // Ingredients
                        let ingredientsHTML = '<div><b>Ingredients:</b></div>';
                        for (let i = 1; i <= 20; i++) {
                            const ingredient = data.meals[0][`strIngredient${i}`];
                            if (ingredient) {
                                const measure = data.meals[0][`strMeasure${i}`];
                                ingredientsHTML += `<div>${measure} ${ingredient}</div>`;
                            }
                        }

                        // Update the modal content with both instructions and ingredients
                        modaltxt12.innerHTML = `${instructionsHTML}<br>${ingredientsHTML}`;
                    } else {
                        console.error('Meal information not available in the API response.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    });
}

setupClickEventListeners();




const viewIngredients = document.querySelectorAll('.recommended-meal-ingredients');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close');
const modalTitle = document.querySelector('.modalpage');
const modalImage = document.querySelector('.modal-img');

viewIngredients.forEach(function(viewIngredients) {
    viewIngredients.addEventListener('click', () => {

    });

});


seachbutton.addEventListener('click', () => {

    const userInput = document.querySelector('input').value
    const resultContainer = document.querySelector('.results');
    const resultText = document.querySelector('.search-result');

    var api_category = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + userInput;
    console.log(api_category)

    resultText.style.display = 'block'
    resultContainer.style.display = 'grid'


    function generateSearchResults(data) {

        const resultImageContainers = document.querySelectorAll('.resultimg')
        const resultMealNames = document.querySelectorAll('.result-title')

        const modalinstru = document.querySelector(".ingredient-head-list")

        for (let i = 0; i < maxIng; i++) {


            data.meals.slice(0, 6).forEach((element, i) => {
                resultImageContainers[i].style.backgroundImage = `url(${element.strMealThumb})`;
                resultMealNames[i].innerHTML = `${element.strMeal}`;




            });

            for (let i = 0; i < maxIng; i++) {

                modalinstru[i].innerHTML = `<div>Recipies:${element.strMeal}<div>`;




            }
        }

    }


    fetch(api_category)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log("Result is: ", data);
            generateSearchResults(data);
        })

})




function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}




function openModal1() {
    document.getElementById('myModal1').style.display = 'block';
}

function closeModal1() {
    document.getElementById('myModal1').style.display = 'none';
}




fetch(api_random)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        generateRandomMeal(data);
    });

function generateRandomMeal(data) {
    const randomImageBox = document.querySelector('.liked-meal');
    const modaltxt = document.querySelector('.modal-page');
    const modalinstru = document.querySelector('.ingredient-head-list');

    data.meals.forEach(element => {
        // Display meal name and image
        randomMealText.innerHTML = `${element.strMeal}`;
        randomImageBox.style.backgroundImage = `url(${element.strMealThumb})`;

        // Display instructions
        modaltxt.innerHTML = `Instructions:<br> ${element.strInstructions}`;

        // Display ingredients
        let ingredientsHTML = '<div>Ingredients:</div>';
        for (let i = 1; i <= 20; i++) {
            const ingredient = element[`strIngredient${i}`];
            if (ingredient) {
                const measure = element[`strMeasure${i}`];
                ingredientsHTML += `<div>${measure} ${ingredient}</div>`;
            }
        }

        // Append ingredients below instructions
        modaltxt.innerHTML = `${ingredientsHTML}<br>${modaltxt.innerHTML}`;
    });
}