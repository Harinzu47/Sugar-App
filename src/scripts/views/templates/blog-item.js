function formatISODateToCustomFormat(isoDate) {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    });

    return formattedDate;
}

const blogItem = (blog) => `
<div class="card col m-2 mx-auto" style="width: 35rem; border-radius: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);>
  <div class="card-body">
  <img src="${blog.urlToImage}" class="card-img-top" alt="${blog.title}">
    <h5 class="card-title">${blog.title}</h5>
    <p class="card-text"> ${formatISODateToCustomFormat(blog.publishedAt)}</p>
    <p class="card-text">${blog.description}</p>
    <a href="${blog.url}" class="btn btn-dark">Read More</a>
  </div>
</div>

`
export default blogItem;