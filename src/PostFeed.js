import React, { useState } from 'react';

const SECTIONS = [
    { name:"Soccer", color: "#fefae0"},
    { name:"Basketball", color:"#f18701"},
    { name:"Football", color:"#003e1f"},
    { name:"F1", color: "#d9d9d9"},
    { name:"Rugby", color:"#6a040f"},
];

const defaultPosts = [
    {
        id: 1,
        title: "Ronaldo is the best soccer player in history",
        created_at: new Date(),
        description: "Cristiano Ronaldo is widely regarded as one of the greatest soccer players of his generation. His goal-scoring ability, athleticism, and versatility have earned him numerous awards and accolades throughout his career. ",
        category: "Soccer",
        thumbsUp: 20,
        thumbsDown: 10
    },
    {
        id: 2,
        title: "Lebron has the most points in NBA history",
        created_at: new Date(),
        description: "LeBron James is known for his scoring ability, versatility, and overall impact on the game, and he continues to be a prominent figure in the NBA.",
        category: "Basketball",
        thumbsUp: 20,
        thumbsDown: 10
    },
];

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

                return (
                    <li key={post.id} className="post-on-feed" id={`post-${index}`} onClick={() => openModal(index)}>
                        <h6>{post.title}</h6>
                        <span>{formattedDate} {formattedTime}</span>
                        <span className="tag" style={{backgroundColor, color: textColor}}>{post.category}</span>
                        <div className="vote-buttons">
                            <button><i className="fa-regular fa-thumbs-up"></i> <strong>{post.thumbsUp}</strong></button>
                            <button><i className="fa-regular fa-thumbs-down"></i> <strong>{post.thumbsDown}</strong></button>
                        </div>
                        {modalIndex === index && (
                            <div id={`modal-${index}`} className={`modal ${modalIndex === index ? 'modal-open' : ''}`}>
                                <div className="modal-content">
                                <span className="close" id={`close-${index}`} onClick={(event) => { event.stopPropagation(); closeModal(); }}>×</span>

                                    <h6>{post.title}</h6>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
export default PostFeed;
