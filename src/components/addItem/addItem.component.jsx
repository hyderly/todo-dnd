import React, { useState } from "react";
import "./addItem.styles.css";

import uuid from "react-uuid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { connect } from "react-redux";
//redux
import {
  toggleHidden,
  addItem,
  deleteItem,
} from "../../redux/task/task.actions";

const AddItem = ({ hidden, toggleHidden, addItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  const submitForm = () => {
    if (title && description && dueDate) {
      addItem({
        id: uuid(),
        title,
        description,
        date: `${dueDate.getDate()}-${
          dueDate.getMonth() + 1
        }-${dueDate.getFullYear()}`,
      });
      setTitle("");
      setDescription("");
      toggleHidden();
    } else alert("please fill form correctly");
  };

  return (
    <div className={hidden ? "display-none " : "add-item"}>
      <img
        onClick={toggleHidden}
        className="close-btn"
        src={require("../../assets/close.png")}
        alt="close"
      />
      <input
        value={title}
        placeholder="Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={description}
        placeholder="Description"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        closeOnScroll={true}
        customInput={<ExampleCustomInput />}
        minDate={new Date()}
        withPortal
      />
      <img
        onClick={submitForm}
        className="done-btn"
        src={require("../../assets/check.png")}
        alt="check-icon"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.task.hidden,
});

const mapsDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(mapStateToProps, mapsDispatchToProps)(AddItem);
