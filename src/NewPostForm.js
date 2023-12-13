import { SECTIONS } from "./data.js";
function NewPostForm(){


//This is for the textarea
  function autoGrow(event) {
    event.target.style.height = "5px";
    event.target.style.height = (event.target.scrollHeight) + "px";
}


    return ( <form className="post-form"> 
    {/* <input type="text" placeholder="Hot Take"/> */}
    <textarea class="form-description" placeholder="Hot Take" style= {{resize: "none"}} onInput={autoGrow}></textarea>
    <textarea class="form-description" placeholder="Explain Your Hot Take" style= {{resize: "none"}} onInput={autoGrow}></textarea>
    <span>word count</span>
    <select>
        <option value="">Choose Topic</option>
       {SECTIONS.map((section) => <option key={section.name} value={section.name}>{section.name}</option>)}
    </select>
    <button class="btn">Post</button></form>);
  }


 


  export default NewPostForm;