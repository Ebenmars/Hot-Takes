import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./styles.css";
import CatagoryFilter from "./CatagoryFilter";
import NewPostForm from "./NewPostForm";
import PostFeed from "./PostFeed";

function App() {
  // the form is initially at false which means hidden
  const [showForm, setShowForm] = useState(false);
  //used to define posts
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Home");

  //using  this to get the posts from the database
  useEffect(function () {
    async function getPosts() {
      setIsLoading(true);

      let query = supabase.from("posts").select("*");

      if (currentCategory !== "Home") {
        query = query.eq("category", currentCategory);
      }
      //I will make a dropdown menu and user can pick if they want most recent posts or if they want the votes with the most upvots
      const { data: posts, error } = await query
        // .eq("category","Home")
        .order("thumbsUp", { ascending: false })
        .limit(1000);

      //setting the posts
      if (!error) {
        setPosts(posts);
      } else {
        alert("Cant get data");
      }
      setPosts(posts);
      //after the data has loaded
      setIsLoading(false);
    }
    getPosts();
  }, [currentCategory]);

  return (
    <>
      <Header show={showForm} setShowForm={setShowForm} />
      {/* use state to show form, if the sate is false dont show anything */}
      {showForm ? (
        <NewPostForm setPosts={setPosts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        {/* Component of the tags section */}
        <CatagoryFilter setCurrentCategory={setCurrentCategory} />
        {/* if the data is loading show the message, else show the posts   */}
        {isLoading ? <Loader /> : <PostFeed posts={posts}  setPosts={setPosts}/>}
      </main>
      <footer>Me</footer>
    </>
  );
}
function Loader() {
  return (
    <p
      style={{
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      Loading... Please Wait
    </p>
  );
}

function Header({ show, setShowForm }) {
  const appTitle = "Hot Takes";

  return (
    <header className="header">
      <div className="logo">
        <h1>{appTitle}</h1>
      </div>
      {/* change state. if user clicks ones its true if they click again the state is now false */}
      <button
        className="btn"
        id="create-post"
        onClick={() => setShowForm((show) => !show)}
      >
        {show ? "x" : "+"}
      </button>
    </header>
  );
}
export default App;
