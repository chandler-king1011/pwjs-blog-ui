const API_URL = " https://api-pwjs-blog.herokuapp.com/api/posts/";
const API_BASE_URL = " https://api-pwjs-blog.herokuapp.com/";

window.onload = () => {
    getPost(window.location.search.substr(1));
}

const getPost = (id) => {
    fetch(`${API_URL}${id}`)
    .then(response => {
        return response.json();
    }).then(data => {
        buildPost(data[0]);
    }).catch(error => {
        console.log(error);
    });

    
}

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.posts_date)).toDateString();
    const imageUrl = `${data.posts_img}`
    document.querySelector(".post-container").innerHTML = 
        `<div id="individual-post-title" class="post-container_title">${data.posts_title}</div>
         <div id="individual-post-date" class="post-container_date">Published on ${postDate}</div>
         <div id="individual-post-content" class="post-container_content">${data.posts_content}</div>`;
    document.querySelector(".post-header").style.backgroundImage = `url(${imageUrl})`;
}

