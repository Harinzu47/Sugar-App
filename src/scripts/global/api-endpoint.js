import CONFIG from "./config";

const API_ENDPOINT = {
  LOWSUGAR: `${CONFIG.BASE_URL}recipes/findByNutrients?apiKey=${CONFIG.KEY}&maxCarbs=10&maxSugar=10`,
  NORMALSUGAR: `${CONFIG.BASE_URL}recipes/findByNutrients?apiKey=${CONFIG.KEY}&maxCarbs=50&minSugar=10&maxSugar=50`,
  HIGHSUGAR: `${CONFIG.BASE_URL}recipes/findByNutrients?apiKey=${CONFIG.KEY}&maxCarbs=100&minSugar=50&maxSugar=100`,
  DETAIL: (id) => `${CONFIG.BASE_URL}recipes/${id}/information/?apiKey=${CONFIG.KEY}`,
  BLOGS: `${CONFIG.BASE_URL2}everything?domains=medicalnewstoday.com&q=diabetes&apiKey=${CONFIG.KEY2}`,


};

export default API_ENDPOINT;