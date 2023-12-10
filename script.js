
const create_btn = document.querySelector("#create-post");
const form = document.querySelector(".post-form")
create_btn.addEventListener("click",function () {
    
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
    }
    else{
        form.classList.add("hidden");
    }
   
})