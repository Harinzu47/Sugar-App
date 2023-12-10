const Blogs = {
    currentPage: 1,
    postsPerPage: 3, // Jumlah blog yang ingin ditampilkan per halaman
    blogs: [
        {
            title: "About Diabetes 1",
            image: "./img/blog1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores, nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!",
            date: new Date(),
        },
        {
            title: "About Diabetes 2",
            image: "./img/blog2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores, nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!",
            date: new Date(),
        },
        {
            title: "About Diabetes 3",
            image: "./img/blog3.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores, nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!",
            date: new Date(),
        },
        {
            title: "About Diabetes 4",
            image: "./img/blog4.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores, nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!",
            date: new Date(),
        },

    ],

    getCurrentBlogs() {
        const start = (this.currentPage - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        return this.blogs.slice(start, end);
    },

    renderBlog(blog) {
        const formattedDate = blog.date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });

        return `
        <div class="wrapper">
        <div class="image">
            <img src="${blog.image}" alt="${blog.title}" />
        </div>
        <div class="detail_blog">
            <p class="blog__date">${formattedDate}</p> 
            <h1 class="blog__title">${blog.title}</h1>
            <p class="blog__description">${blog.description}</p>
            <button class="blog__button">Read More</button>
        </div>
        </div>
        `;
    },
    render() {
        const start = (this.currentPage - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        const currentBlogs = this.blogs.slice(start, end);

        const blogHTML = currentBlogs.map(blog => this.renderBlog(blog)).join('');

        return `
            <div class="blog">
                <h1>Blogs</h1>
                <div class="all-wrapper">
                    ${blogHTML}
                </div>
                <ul class="listPage">
                    ${this.renderPagination()}
                </ul>
            </div>
        `;
    },

    renderPagination() {
        const totalPages = Math.ceil(this.blogs.length / this.postsPerPage);
        let pagesHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            pagesHTML += `<li class="${i === this.currentPage ? 'active' : ''}" onclick="Blogs.changePage(${i})">${i}</li>`;
        }

        return pagesHTML;
    },

    changePage(pageNumber) {
        this.currentPage = pageNumber;
        this.renderAfterPageChange();
    },

    renderAfterPageChange() {
        // Update tampilan setelah perubahan halaman
        const blogContainer = document.querySelector('.all-wrapper');
        const currentBlogs = this.getCurrentBlogs();
        const blogHTML = currentBlogs.map(blog => this.renderBlog(blog)).join('');
        const listPageContainer = document.querySelector('.listPage');

        blogContainer.innerHTML = blogHTML;

        const blogDateElements = document.querySelectorAll('.blog__date');
        blogDateElements.forEach((element, index) => {
            const blog = currentBlogs[index];
            const formattedDate = blog.date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });

            element.textContent = formattedDate;
        });

        listPageContainer.innerHTML = this.renderPagination();
    },

    async afterRender() {
        const blogDateElements = document.querySelectorAll('.blog__date');

        blogDateElements.forEach((element, index) => {
            const blog = this.blogs[index];
            const formattedDate = blog.date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });

            element.textContent = formattedDate;
        });

        this.renderAfterPageChange();

    },
};

export default Blogs;