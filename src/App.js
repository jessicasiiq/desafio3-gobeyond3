import React from "react";
import { data } from "./database.js";
import ContainerSideBar from "./components/sideBar/js/ContainerSideBar.js"

const App = () => {
  return (
   <main className="main">
      <ContainerSideBar {...data.user}/>
   </main>
  );
}

export default App;