
const create_btn = document.querySelector("#create-post");
const form = document.querySelector(".post-form");
const postList = document.querySelector("#posts-list");



create_btn.addEventListener("click",function () {
    postList.innerHTML = "";
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        create_btn.textContent = "x";
    }
    else{
        form.classList.add("hidden");
        create_btn.textContent = "+";
    }

})

postList.innerHTML = "";


//Load data from Supabase
loadPosts();


async function loadPosts() {

    //pause exectution
    const res = await fetch("https://acnuilrhdcvfmphsdyog.supabase.co/rest/v1/posts", {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbnVpbHJoZGN2Zm1waHNkeW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNDUzNjEsImV4cCI6MjAxNzgyMTM2MX0.UEVjLVN5KRa3dhr17ay4bYIzzcq1-ogh703z5z7w0sc",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbnVpbHJoZGN2Zm1waHNkeW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNDUzNjEsImV4cCI6MjAxNzgyMTM2MX0.UEVjLVN5KRa3dhr17ay4bYIzzcq1-ogh703z5z7w0sc",
        },
    });

    const data = await res.json()
    createPostsList(data);
    console.log(data);

}

function createPostsList(dataArr) {
    const htmlArr = dataArr.map((post) => {
        // Create a new Date object from the timestamp
        var date = new Date(post.created_at);

        // Format the date and time
        var formattedDate = date.toLocaleDateString();
        var formattedTime = date.toLocaleTimeString("en-US");

        return `<li class="post-on-feed">
            <h6>
                ${post.title}
            </h6>
            <span>${formattedDate} ${formattedTime}</span>
            <span class="tag" style="background-color: #fefae0; color: #000000;">${post.description}</span>
            <div class="vote-buttons">
                <button><i class="fa-regular fa-thumbs-up"></i> <strong>100</strong></button>
                <button><i class="fa-regular fa-thumbs-down"></i> <strong>14</strong></button>
            </div>
        </li>`
    });
    const postsContainer = document.getElementById('posts-list');
    postsContainer.innerHTML = htmlArr.join('');
}




