function formatISODateToCustomFormat(isoDate) {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formattedDate;
}

const blogItem = (blog) => `
  <div class="wrapper">
  <div class="image">
  <img class="img lazyload" src="${blog.image}" alt="${blog.title}">
  </div>

  <div class="detail_blog">
  <p class="blog__date"> ${formatISODateToCustomFormat(blog.publishedAt)}</p>
  <h5 class="blog__title">${blog.title}</h5>
    <p class="blog__description">${blog.description}</p>
    <a href="${blog.url}" class="btn btn-dark">Read More</a>
  </div>
  </div>
`
export default blogItem;