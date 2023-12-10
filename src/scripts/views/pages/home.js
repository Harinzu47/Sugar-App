const Home = {
    async render() {
        return `
        <div class="hero">
        <img src="img/unsplash_kcRFW-Hje8Y.png" alt="Sugar Control Image">
        <div class="hero-text">
            <h1>Welcome to Sugar Control Website</h1>
        </div>
    </div>
    <div class="explain">
        <div class="left-explanation">
            <h2>What is a Sugar Control Website?</h2>
            <p>We provide the latest health guidance with intelligent dietary solutions, offering menu adjustments
                and smart meal plans to help you effectively manage diabetes according to your specific health
                needs.</p>
        </div>
        <div class="right-explanation">
            <h2>Our Service</h2>
            <p>Embark on a smart health journey with our Smart Blood Sugar Calculator. Just enter your blood sugar
                levels, and watch as our interactive tool provides personalized food recommendations tailored to
                your unique blood sugar condition. This is the key to gaining a better understanding and responding
                to your specific health needs.</p>
        </div>
    </div>
    <div class="why">
        <h2><b>Why Sugar</b>Control</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="img/unsplash_WhQAZy14xZU.png" class="card-img-top" alt="...">
                    <div class="card-body color">
                        <h5 class="card-title">Customized Smart Eating</h5>
                        <p class="card-text">Unlock nutritional wisdom with our Interactive Blood Sugar Calculator,
                            monitoring and offering recommendations tailored to your blood sugar levels, assisting
                            you in making informed food choices.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="img/unsplash_jkDLNDGougw.png" class="card-img-top" alt="...">
                    <div class="card-body color">
                        <h5 class="card-title">Customized Smart Eating</h5>
                        <p class="card-text">Unlock nutritional wisdom with our Interactive Blood Sugar Calculator,
                            monitoring and offering recommendations tailored to your blood sugar levels, assisting
                            you in making informed food choices.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="img/unsplash_J2e34-1CVVs.png" class="card-img-top" alt="...">
                    <div class="card-body color">
                        <h5 class="card-title">Customized Smart Eating</h5>
                        <p class="card-text">Unlock nutritional wisdom with our Interactive Blood Sugar Calculator,
                            monitoring and offering recommendations tailored to your blood sugar levels, assisting
                            you in making informed food choices.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What sets SugarControl apart from other health information sources?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Website SugarControl not only provides information about diabetes
                        but also offers interactive tools to assist users in managing their dietary patterns based
                        on their blood sugar levels. This provides a more personalized and reliable solution.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How does the feature DiabetesDish Matcher work?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">You can go to the DiabetesDish Matcher page, input your blood sugar
                        level in the provided input column, and then we will provide recommendations for the foods
                        you should consume.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Does SugarControl offer up-to-date information on diabetes?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Yes, we always provide up-to-date information about diabetes.
                        Through this website, we hope to assist friends in staying healthy and maintaining a
                        balanced diet.</div>
                </div>
            </div>
        </div>
    </div>
      `;
    },

    async afterRender() {
    },
};

export default Home;