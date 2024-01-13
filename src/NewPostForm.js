import { SECTIONS } from "./data.js";
import { useState } from "react";
import supabase from "./supabase";


function NewPostForm({setPosts, setShowForm}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCatagory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  //This is for the textarea
  function autoGrow(event) {
    event.target.style.height = "5px";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  async function handleSumbit(event) {
    event.preventDefault();
  
    if (title && description && category) {
     
      setIsUploading(true);
      const {data:newPost,error} = await supabase.from("posts").insert([{title,description,category}]).select();
      setIsUploading(false);
      if(!error) setPosts((prevPosts) => [newPost[0], ...prevPosts]);
      setTitle("");
      setDescription("");
      setCatagory("");
      // setShowForm(false);
    }
  }
  
  return (
    <form className="post-form" onSubmit={handleSumbit}>
      {/* <input type="text" placeholder="Hot Take"/> */}
      {/* Read value */}
      <textarea
        className="form-description"
        placeholder="Hot Take"
        value={title}
        style={{ resize: "none" }}
        onInput={autoGrow}
        onChange={(eventObj) => setTitle(eventObj.target.value)}
      ></textarea>
      <textarea
        className="form-description"
        placeholder="Explain Your Hot Take"
        value={description}
        style={{ resize: "none" }}
        onInput={autoGrow}
        disabled={isUploading}
        onChange={(eventObj) => setDescription(eventObj.target.value)}
      ></textarea>
      <span> Word Count: {description.split(" ").length - 1}</span>
      <select
        value={category}
        disabled={isUploading}
        onChange={(eventObj) => setCatagory(eventObj.target.value) }
      >
        <option value="">Choose Topic</option>
        {SECTIONS.map((section) => (
          <option key={section.name} value={section.name} >
            {section.name}
          </option>
        ))}
      </select>
      <button className="btn" disabled={isUploading}>Post</button>
    </form>
  );
}
export default NewPostForm;
