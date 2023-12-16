
const foodItem = (food) => `
<div class="card col m-2 mx-auto" style="width: 20rem; border-radius: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
  <img src="${food.image}" class="card-img-top" alt="Recipe Image" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
  <div class="card-body" style="background-color: #f8f9fa;">
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