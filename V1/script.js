
const create_btn = document.querySelector("#create-post");
const form = document.querySelector(".post-form");
const postList = document.querySelector("#posts-list");



create_btn.addEventListener("click",function () {
    // postList.innerHTML = "";
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        create_btn.textContent = "x";
    }
    else{
        form.classList.add("hidden");
        create_btn.textContent = "+";
    }

});

const SECTIONS = [
    { name:"Soccer", color: "#fefae0"},
    { name:"Basketball", color:"#f18701"},
    { name:"Football", color:"#003e1f"},
    { name:"F1", color: "#d9d9d9"},
    { name:"Rugby", color:"#6a040f"},
 ];

// postList.innerHTML = "";


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
    const htmlArr = dataArr.map((post, index) => {
        // Create a new Date object from the timestamp
        let date = new Date(post.created_at);

        // Format the date and time
        let formattedDate = date.toLocaleDateString();
        let formattedTime = date.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});

        let backgroundColor = "#000000";
        let textColor = "#ffffff";
        let section = SECTIONS.find((section) => section.name === post.category);

        if(section){
            backgroundColor = section.color;
        }
        if(["Soccer","F1","Home"].includes(section.name)){
            textColor = "#000000";
            
        }

        return `<li class="post-on-feed" id="post-${index}" onclick="openModal(${index})">
            <h6>${post.title}</h6>
            <span>${formattedDate} ${formattedTime}</span>
            <span class="tag" style="background-color:${backgroundColor}; color:${textColor};">${post.category}</span>
            <div class="vote-buttons">
                <button><i class="fa-regular fa-thumbs-up"></i> <strong>${post.thumbsup}</strong></button>
                <button><i class="fa-regular fa-thumbs-down"></i> <strong>${post.thumbsdown}</strong></button>
            </div>
            <div id="modal-${index}" class="modal">
                <div class="modal-content">
                    <span class="close" id="close-${index}">×</span>
                    <h6>${post.title}</h6>
                    <p>${post.description}</p>
                </div>
            </div>
        </li>`
    });
    const postsContainer = document.getElementById('posts-list');
    postsContainer.innerHTML = htmlArr.join('');

    dataArr.forEach((post,index) =>{
        document.getElementById(`close-${index}`).addEventListener("click", function (event){
            //this is to prevent event from immedielty opening the page back up after closing it 
            event.stopPropagation();
            closeModal(index);
        });
    });
    
}


function openModal(index){
    document.getElementById(`modal-${index}`).style.display = "block";
}

function closeModal(index){
    document.getElementById(`modal-${index}`).style.display = "none";
}






