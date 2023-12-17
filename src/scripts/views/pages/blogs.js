import blogsResource from "../../data/blog-source";
import blogItem from "../templates/blog-item"


const newsBlogs = {
    async render() {
        return `
            <div class="blog">
                <h1>Blogs</h1>
                <div id="content" class="container flex flex-wrap mb-5 justify-center gap-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-3"></div>
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