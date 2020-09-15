import React from "react";
import "./main-box.styles.css";

import List from "../list/list.component";

const MainBox = () => (
  <div className="main-box">
    <div className="box-1">
      <p className="box-1-text">To-Do</p>
      <List />
    </div>
    {/* <div className="box-2">
      <p className="box-2-text">Progress</p>
    </div>
    <div className="box-3">
      <p className="box-3-text">Completed</p>
    </div> */}
  </div>
);

export default MainBox;
