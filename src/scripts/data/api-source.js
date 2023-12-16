import API_ENDPOINT from "../global/api-endpoint";

class foodsResource {
    static async getLowSugarList() {
        const response = await fetch(API_ENDPOINT.LOWSUGAR);
        return response.json();
    }

    static async getNormalSugarList() {
        const response = await fetch(API_ENDPOINT.NORMALSUGAR);
        return response.json();
    }

    static async getHighSugarList() {
        const response = await fetch(API_ENDPOINT.HIGHSUGAR);
        return response.json();
    }

    static async getFoodDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default foodsResource;