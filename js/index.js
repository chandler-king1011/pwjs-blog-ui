const API_URL = "https://api-pwjs-blog.herokuapp.com/api/posts";
const API_BASE_URL = "https://api-pwjs-blog.herokuapp.com/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(data=> {
        buildPosts(data);
    }).catch(error => {
        console.log(error);
    })
}

const buildPosts = (blogPosts) => {
    document.querySelector(".main_container").innerHTML = blogPosts.map(post => {
        const postDate = new Date(parseInt(post.added_date)).toDateString();
        const imageURL = `${API_BASE_URL}${post.post_image}`;
        return `<a href="./post.html?${post.id}" class="post">
                    <div class="post_image" style="background-image: url(${imageURL})"></div>
                    <div class="post_content">
                        <div class="post_date">${postDate}</div>
                        <div class="post_title">${post.title}</div>
                        <div class="post_text">${post.content}</div>
                    </div>
                </a>`
    }).join(" ");
}