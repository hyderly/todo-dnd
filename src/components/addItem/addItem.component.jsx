import React, { useState } from "react";
import "./addItem.styles.css";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState(new Date().getDate());
  const [dueDate, setDueDate] = useState("");

  return (
    <div className="add-item">
      <img
        class="close-btn"
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
      <img
        class="done-btn"
        src={require("../../assets/check.png")}
        alt="check-icon"
      />
    </div>
  );
};

export default AddItem;
