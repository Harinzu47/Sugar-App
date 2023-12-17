import foodsResource from "../../data/api-source";
import foodItem from "../templates/food-item";

const DIABETESDISH = {
  async render() {
    return `
        <div class="container">
          <h1 class="text-center pt-5">DiabetesDish Matcher</h1>
          <p class="text-center mb-5 mt-5">
            Enter your blood sugar levels to receive a personalized meal plan
            tailored to your specific blood glucose needs
          </p>
  
          <!-- Search -->
          <div class="input-group">
            <input
              type="number"
              class="form-control"
              placeholder="Enter your blood sugar level"
              aria-label="input blood sugar level"
              aria-describedby="button-addon2"
              id="bloodSugarInput"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="searchButton"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div id="foodContainer" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-3">
        </div>
        <div class="alert alert-success m-5" role="alert">
            <h4 class="alert-heading">Please Read This!</h4>
            <p>Before you use this feature, you should see a doctor or lab to check your blood sugar levels. Because to maximize this feature you must know your blood sugar levels which can only be checked by a doctor in the lab.</p>
            <hr>
            <p class="mb-0">We will give you suggestions of foods that you can consume according to your blood sugar levels.</p>
        </div>
      `;
  },

  async afterRender() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', this.handleSearch.bind(this));
  },

  async handleSearch() {
    const bloodSugarInput = document.getElementById('bloodSugarInput').value;

    let katalog;
    let alertMessage;

    // Clear previous alert
    const previousAlert = document.querySelector('.blood-sugar-alert');
    if (previousAlert) {
      previousAlert.remove();
    }

    if (bloodSugarInput < 70) {
      katalog = await foodsResource.getHighSugarList();
      alertMessage = `
          <div class="alert alert-danger blood-sugar-alert text-center m-5" role="alert">
            Your blood sugar is low. Please consume what we recommend.
          </div>`;
    } else if (bloodSugarInput >= 70 && bloodSugarInput <= 120) {
      katalog = await foodsResource.getNormalSugarList();
      alertMessage = `
          <div class="alert alert-success blood-sugar-alert text-center m-5" role="alert">
            Your blood sugar is normal. Please keep what you eat in moderation.
          </div>`;
    } else {
      katalog = await foodsResource.getLowSugarList();
      alertMessage = `
          <div class="alert alert-danger blood-sugar-alert text-center m-5" role="alert">
            Your blood sugar is high. Watch your diet with the foods we recommend.
          </div>`;
    }

    const listKatalog = document.getElementById('foodContainer');
    const alertContainer = document.createElement('div');
    alertContainer.innerHTML = alertMessage;

    // Insert the alert before the food container
    listKatalog.parentElement.insertBefore(alertContainer, listKatalog);

    // Clear previous food items
    listKatalog.innerHTML = '';

    // Render food items
    katalog.forEach((food) => {
      listKatalog.innerHTML += foodItem(food);
    });
  },
};

export default DIABETESDISH;
