const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost(window.location.search.substr(1));
}

const getPost = (id) => {
    fetch(`${API_URL}${id}`)
    .then(response => {
        return response.json();
    }).then(data => {
        buildPost(data);
    }).catch(error => {
        console.log(error);
    });

    
}

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const imageUrl = `${API_BASE_URL}${data.post_image}`
    document.querySelector(".post-container").innerHTML = 
        `<div id="individual-post-title" class="post-container_title">${data.title}</div>
         <div id="individual-post-date" class="post-container_date">Published on ${postDate}</div>
         <div id="individual-post-content" class="post-container_content">${data.content}</div>`;
    document.querySelector(".post-header").style.backgroundImage = `url(${imageUrl})`;
}

