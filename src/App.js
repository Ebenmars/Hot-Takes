import "./styles.css";
import CatagoryFilter from "./CatagoryFilter";
import NewPostForm from "./NewPostForm";
import PostFeed from "./PostFeed";
import {useState} from "react";


function App() {


// the form is initially at false which means hidden
const [showForm, setShowForm] = useState(false);


  return (
    <>
    <Header show={showForm} setShowForm={setShowForm}/>
    {/* use state to show form if the sate is false dont show anything */}
    {showForm ? <NewPostForm/> : null}
    
    <main className="main">
    
      {/* Component of the tags section */}
    <CatagoryFilter/>
    {/* Component of the post feed */}
    <PostFeed/>
    </main>
    <footer>Me</footer>
    </>
  );
}

function Header({show, setShowForm}){
  const appTitle = "Hot Takes";

return <header className="header">
      <div className="logo">
      <h1>{appTitle}</h1>
      </div>
      {/* change state. if user clicks ones its true if they click again the state is now false */}
      <button className="btn" id="create-post" onClick={() => setShowForm((show) => !show)  }>{show ? 'x' : '+'}</button> 

    </header>
}
export default App;
