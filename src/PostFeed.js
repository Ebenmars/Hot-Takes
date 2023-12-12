import React, { useState } from 'react';
import {SECTIONS,defaultPosts} from './data.js';

function PostFeed() {
    const [modalIndex, setModalIndex] = useState(null);

    const openModal = (index) => {
        setModalIndex(index);
    };

    const closeModal = () => {
        setModalIndex(null);
    };

    const posts = defaultPosts;

    return (
        <ul id="posts-list">
            {posts.map((post, index) => {
                let date = new Date(post.created_at);
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

                return Post(post, index, openModal, formattedDate, formattedTime, backgroundColor, textColor, modalIndex, closeModal);
            })}
        </ul>
    );
}

function Post(post, index, openModal, formattedDate, formattedTime, backgroundColor, textColor, modalIndex, closeModal) {
    return <li key={post.id} className="post-on-feed" id={`post-${index}`} onClick={() => openModal(index)}>
        <h6>{post.title}</h6>
        <span>{formattedDate} {formattedTime}</span>
        <span className="tag" style={{ backgroundColor, color: textColor }}>{post.category}</span>
        <div className="vote-buttons">
            <button><i className="fa-regular fa-thumbs-up"></i> <strong>{post.thumbsUp}</strong></button>
            <button><i className="fa-regular fa-thumbs-down"></i> <strong>{post.thumbsDown}</strong></button>
        </div>
        {modalIndex === index && (
            <div id={`modal-${index}`} className={`modal ${modalIndex === index ? 'modal-open' : ''}`}>
                <div className="modal-content">
                    <span className="close" id={`close-${index}`} onClick={(event) => { event.stopPropagation(); closeModal(); } }>×</span>

                    <h6>{post.title}</h6>
                    <p>{post.description}</p>
                </div>
            </div>
        )}
    </li>;
}

export default PostFeed;



