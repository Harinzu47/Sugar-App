
const foodDetail = (food) => `
<div class="recipe-container">
<img class="img-detail" src="${food.image}" alt="${food.title}">
<h1 class="detail-title">${food.title}</h1>
<p class="detail-summary">
    ${food.summary}
</p>
<p class="details">
  <strong>Ready in:</strong> ${food.readyInMinutes}<br>
  <strong>Servings:</strong> ${food.servings}<br>
  <strong>Source:</strong> <a href="${food.sourceUrl}" target="_blank">Foodista</a><br>
  <strong>Dish Types:</strong> ${food.dishTypes.map((dishType) => dishType).join(', ')}<br>
  <strong>Diets:</strong> ${food.diets}<br>
  <strong>Occasions:</strong> ${food.occasions.map((occasion) => occasion).join(', ')}
</p>
<div class="detail-instructions">
  <h2>Instructions</h2>
  <p>${food.instructions}</p>
</div>
</div>

`;

export default foodDetail;
