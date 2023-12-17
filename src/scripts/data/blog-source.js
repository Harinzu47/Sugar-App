import API_ENDPOINT from "../global/api-endpoint";

class blogsResource {
    static async getBlogsList() {
        const response = await fetch(API_ENDPOINT.BLOGS);
        return response.json();
    }
}

export default blogsResource;