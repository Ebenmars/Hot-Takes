import { SECTIONS } from "./data.js";
import { useState } from "react";


function NewPostForm({setPosts, setShowForm}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCatagory] = useState("");

  //This is for the textarea
  function autoGrow(event) {
    event.target.style.height = "5px";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  function handleSumbit(event) {
    event.preventDefault();
  
    if (title && description && category) {
      const newPost = {
        id: Math.floor(Math.random() * 1000000),
        title,
        created_at: new Date(),
        description,
        category,
        thumbsUp: 0,
        thumbsDown: 0
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setTitle("");
      setDescription("");
      setCatagory("");
      setShowForm(false);
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
        onChange={(eventObj) => setDescription(eventObj.target.value)}
      ></textarea>
      <span>{description.split(" ").length - 1}</span>
      <select
        value={category}
        onChange={(eventObj) => setCatagory(eventObj.target.value)}
      >
        <option value="">Choose Topic</option>
        {SECTIONS.map((section) => (
          <option key={section.name} value={section.name}>
            {section.name}
          </option>
        ))}
      </select>
      <button className="btn">Post</button>
    </form>
  );
}
export default NewPostForm;
