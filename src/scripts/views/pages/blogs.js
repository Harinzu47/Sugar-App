import blogsResource from "../../data/blog-source";
import blogItem from "../templates/blog-item"


const newsBlogs = {
    async render() {
        return `
            <div class="blog">
                <h1>Blogs</h1>
                <div id="content" class="all-wrapper"></div>
            </div>
        `;
    },

    async afterRender() {
        const blogs = await blogsResource.getBlogsList();
        console.log(blogs);
        const blogsContent = document.querySelector('#content');

        if (blogs && blogs.articles && Array.isArray(blogs.articles)) {
            blogs.articles.forEach((blog) => {
                blogsContent.innerHTML += blogItem(blog);
            });
        } else {
            const frameItem = `
                    <div class="blog">
                        <h1>ERROR</h1>
                    </div>`;
            blogsContent.innerHTML = frameItem;

        }
    },
};

export default newsBlogs;