import { SECTIONS } from "./data.js";

function CatagoryFilter() {
  return (
    <aside className="sidebar">
      <ul>
      <li><button className="btn" style={{backgroundColor: "#c5bb76", color: "#000000", marginBottom: "20px"}}>Home</button></li>
        {/* looping through the tags */}
        {SECTIONS.map((section) => (
          <li key={section.name}>
            {/* creating a button for each tag  */}
            <button
              className="btn"
              style={{
                backgroundColor: section.color,
                // if the tag is soocer,home,or f1 set the color of text to be black
                color:
                  section.name === "Soccer" ||
                  section.name === "F1" ||
                  section.name === "Home"
                    ? "#000000"
                    : "#FFFFFF",
              }}
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CatagoryFilter;
