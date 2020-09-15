import React from "react";
import "./confirmation.styles.css";

const Confirmation = () => {
  return (
    <div className="confirm-box">
      <h3 className="confirm-box-txt">Do you want to delete this task ?</h3>
      <div className="btn-box">
        <button className="btn btn-1">Confirm</button>
        <button className="btn btn-2">Cancle</button>
      </div>
    </div>
  );
};

export default Confirmation;
