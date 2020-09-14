import React from "react";

import { connect } from "react-redux";

//import components
import AddItem from "../addItem/addItem.component";
import MainBox from "../main-box/main-box.component";

//redux
import { toggleHidden } from "../../redux/task/task.actions";

import "./homepage.styles.css";

const HomePage = ({ hidden, toggleHidden }) => {
  return (
    <div className="homepage">
      <h1 className="app__title">Task Tracker</h1>

      <img
        onClick={toggleHidden}
        className="close"
        className={hidden ? "close" : "display-none"}
        src={require("../../assets/add.png")}
        alt="close"
      />

      <AddItem />

      <MainBox />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.task.items,
  hidden: state.task.hidden,
});

const mapsDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapsDispatchToProps)(HomePage);
