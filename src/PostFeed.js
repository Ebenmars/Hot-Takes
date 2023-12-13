import React, { useState } from "react";
// getting the section and default posts
import { SECTIONS, defaultPosts } from "./data.js";

function PostFeed() {
  // using state to open and close the overlay
  const [modalIndex, setModalIndex] = useState(null);

  //function call to open the overlay
  const openModal = (index) => {
    setModalIndex(index);
  };

   //function call to close the overlay
  const closeModal = () => {
    setModalIndex(null);
  };

  const posts = defaultPosts;


  return (

    <ul id="posts-list">
      {/* looping through the posts , index is the */}
      {posts.map((post, index) => {
        // formating the data and time
        let date = new Date(post.created_at);
        let formattedDate = date.toLocaleDateString();
        let formattedTime = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        let backgroundColor = "#000000";
        let textColor = "#ffffff";
        //getting the section
        let section = SECTIONS.find(
          (section) => section.name === post.category
        );

        //if the section is true the background color will be the color listed in the section object
        if (section) {
          backgroundColor = section.color;
        }
        if (["Soccer", "F1", "Home"].includes(section.name)) {
          textColor = "#000000";
        }

        return Post(
          post,
          index,
          openModal,
          formattedDate,
          formattedTime,
          backgroundColor,
          textColor,
          modalIndex,
          closeModal
        );
      })}
    </ul>
  );
}

function Post(
  post,
  index,
  openModal,
  formattedDate,
  formattedTime,
  backgroundColor,
  textColor,
  modalIndex,
  closeModal
) {
  return (
    // create a post on the post feed
    <li
      key={post.id}
      className="post-on-feed"
      //when the user clicks on the post open the overlay
      id={`post-${index}`}
      
    >
      <h6>{post.title}</h6>
      <span>
        {formattedDate} {formattedTime}
      </span>
      <span className="tag" style={{ backgroundColor, color: textColor }}>
        {post.category}
      </span>
      <div className="post-buttons">
  <div className="other-buttons">
    <button onClick={() => openModal(index)}>
      <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
    </button>
    <button  className="comment-button" style={{marginRight:"50px"}}>
      <i className="fa-regular fa-comment" style={{color: "#ffffff"}}></i>
    </button>
  </div>
  <div className="thumbs-buttons">
    <button>
      <i className="fa-regular fa-thumbs-up"></i>{" "}
      <strong>{post.thumbsUp}</strong>
    </button>
    <button>
      <i className="fa-regular fa-thumbs-down"></i>{" "}
      <strong>{post.thumbsDown}</strong>
    </button>
  </div>
</div>
      {/* if the modelIndex is equal to the current index , show the overlay*/}
      {modalIndex === index && (
        <div
          id={`modal-${index}`}
          className={`modal ${modalIndex === index ? "modal-open" : ""}`}>
            {/* This is the information that is in the overlay */}
          <div className="modal-content">
            {/* logic for the close button */}
            <span
              className="close"
              id={`close-${index}`}
              onClick={(event) => {
                event.stopPropagation();
                //call close function which sets modelIndex to null
                closeModal();
              }}>
              ×
            </span>
            <h6>{post.title}</h6>
            <p>{post.description}</p>
          </div>
        </div>
      )}
    </li>
  );
}

export default PostFeed;
