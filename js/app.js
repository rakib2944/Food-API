const loadMeals = () => {

    const InputMealName = document.getElementById('input-field');
    const inputValue = InputMealName.value;
    InputMealName.value = '';

    if (inputValue.length == 0) {

        document.getElementById('empty-search-erorr').style.display = 'block';

    } else {

        document.getElementById('empty-search-erorr').style.display = 'none';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
            .then(respons => respons.json())
            .then(data => displayMeals(data.meals))
    }
}



// Searching result Display
const displayMeals = (meals) => {

    const mealContainer = document.getElementById('MealsContainer');
    mealContainer.textContent = '';

    if (meals.length == 0) {



    } else {

        meals.forEach(meal => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${meal.strMeal}</h5>
                    <p class="card-text"></p>
                </div>
                </div>
        `;
            mealContainer.appendChild(div);
        });
    }

}