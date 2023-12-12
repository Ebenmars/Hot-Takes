import { SECTIONS } from './data.js';

function CatagoryFilter() {
  return <aside className="sidebar">
    <ul>
      {SECTIONS.map((section) => (
        <li key={section.name}><button className="btn"
          style={{ 
            backgroundColor: section.color, 
            color: section.name === "Soccer" || section.name === "F1" || section.name === "Home" ? "#000000" :"#FFFFFF"  
          }}>{section.name}</button>
        </li>
        ))}
    </ul></aside>;
}

export default CatagoryFilter;
