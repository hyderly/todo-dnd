import React from "react";

//import components
import AddItem from "../addItem/addItem.component";

import "../../App.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 class="app__title">Task Tracker</h1>
      <img class="close" src={require("../../assets/add.png")} alt="close" />
      <AddItem />
    </div>
  );
};

export default HomePage;
