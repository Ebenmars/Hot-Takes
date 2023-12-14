const SECTIONS = [

   { name:"Soccer", color: "#fefae0"},
   { name:"Basketball", color:"#f18701"},
   { name:"Football", color:"#003e1f"},
   { name:"F1", color: "#d9d9d9"},
   { name:"Rugby", color:"#6a040f"},
];




const defaultPosts = [
   {
      id:1,
      title: "Ronaldo is the best soccer player in history",
      created_at: new Date(),
      description: "Cristiano Ronaldo is widely regarded as one of the greatest soccer players of his generation. His goal-scoring ability, athleticism, and versatility have earned him numerous awards and accolades throughout his career. ",
      category: "Soccer",
      thumbsUp: 20,
      thumbsDown: 10
   },
   {
      id:2,
      title: "Lebron has the most points in NBA history",
      created_at: new Date(),
      description: "LeBron James is known for his scoring ability, versatility, and overall impact on the game, and he continues to be a prominent figure in the NBA.",
      category: "Basketball",
      thumbsUp: 20,
      thumbsDown: 10
   },
];

export {SECTIONS};
export{defaultPosts};