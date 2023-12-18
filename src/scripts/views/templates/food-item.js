
const foodItem = (food) => `
<div class="card col m-2 mx-auto">
  <img class="card-img lazyload" alt="Recipe Image" src="${food.image}">
  <div class="card-body">
    <a href="#/food/${food.id}" class="link-card" style="color: #6c757d;"><h5 class="card-title food-title">${food.title}</h5></a>
    <p class="card-text food-text"><strong>Calories:</strong> ${food.calories}</p>
    <p class="card-text food-text"><strong>Carbs:</strong> ${food.carbs}</p>
    <p class="card-text food-text"><strong>Fat:</strong> ${food.fat}</p>
    <p class="card-text food-text"><strong>Protein:</strong> ${food.protein}</p>
    <p class="card-text food-text"><strong>Sugar:</strong> ${food.sugar}</p>
  </div>
</div>

`
export default foodItem;