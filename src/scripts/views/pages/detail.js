import foodsResource from '../../data/api-source';
import UrlParser from '../../routes/url-parser';
import foodDetail from '../templates/food-detail';

const Detail = {
  async render() {
    return `
      <h2 class="detail-h2">Detail Food</h2>
      <div id="detail-food"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const katalog = await foodsResource.getFoodDetail(url.id);
    const foodContainer = document.getElementById('detail-food');
    foodContainer.innerHTML += foodDetail(katalog);
  },
};

export default Detail;
