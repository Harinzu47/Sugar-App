
const foodItem = (food) => `
<div class="card col m-2 mx-auto" style="width: 18rem;">
<img src="${food.image}" class="card-img-top" alt="Recipe Image">
<div class="card-body">
  <a href="#/food/${food.id}" class="link-card"><h5 class="card-title food-title">${food.title}</h5></a>
  <p class="card-text food-text">Calories: ${food.calories}</p>
  <p class="card-text food-text">Carbs: ${food.carbs}</p>
  <p class="card-text food-text">Fat: ${food.fat}</p>
  <p class="card-textfood-text">Protein: ${food.protein}</p>
  <p class="card-text food-text">Sugar: ${food.sugar}</p>
</div>
`
export default foodItem;