const API_URL = " https://api-pwjs-blog.herokuapp.com/api/posts";
const error = document.querySelector(".error");



const submitNewPost = () => {
    let files = document.getElementById("form-post-image").files;
    if(files.length < 1) {
        error.innerText = "An image must be selected."
    } else {
    let blogPost = new FormData();
        blogPost.append("title", document.querySelector("#form-post-title").value);
        blogPost.append("content", document.querySelector("#form-post-content").value);
        blogPost.append("post-image", files[0]);

        fetch(API_URL, {
            method: "POST",
            body: blogPost
        }).then((response) => {
            window.location.href = "./index.html";
        }).catch(err => {
            error.innerText="An error occurred";
        })
    }
}

const clearError = () => {
    error.innerText = "";
}

document.getElementById("form-post-image").addEventListener("change", clearError);

