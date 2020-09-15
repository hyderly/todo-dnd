import React from "react";
import { connect } from "react-redux";
import "./item.styles.css";

import { deleteItem } from "../../redux/task/task.actions";
import Confirmation from "../confirmation/confirmation.component";

const Item = ({ item, deleteItem }) => {
  const { title, description, date } = item;

  return (
    <div className="item">
      <img
        onClick={() => deleteItem(item)}
        className="delete-item"
        src={require("../../assets/close.png")}
        alt="deleteItem"
      />

      <p className="item-title">{title}</p>
      <p className="item-description">{description}</p>
      <p className="item-date">Due: {date}</p>
    </div>
  );
};

const mapsDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapsDispatchToProps)(Item);
