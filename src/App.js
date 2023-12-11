import "./styles.css";
import CatagoryFilter from "./CatagoryFilter";
import NewPostForm from "./NewPostForm";
import PostFeed from "./PostFeed";
function App() {

  const SECTIONS = [
    { name:"Soccer", color: "fefae0"},
    { name:"Basketball", color:"f18701"},
    { name:"Football", color:"003e1f"},
    { name:"F1", color: "d9d9d9"},
    { name:"Rugby", color:"6a040f"},
 ];
 
 

const appTitle = "Hot Takes"

  return (
    <>
    <header className="header">
      <div className="logo">
      <h1>{appTitle}</h1>
      </div>
      <button className="btn" id="create-post">+</button>
    </header>

    <NewPostForm/>

    <main className="main">
    <CatagoryFilter/>
    <PostFeed/>
    </main>
    </>
  );
}


export default App;
