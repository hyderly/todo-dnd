import React from "react";
import { connect } from "react-redux";

import "./list.styles.css";

import Item from "../item/item.component";

const List = ({ items }) => {
  console.log(items);
  return (
    <div className="list-box">
      {items.length ? (
        items.map((item) => {
          return <Item item={item} key={item.id} />;
        })
      ) : (
        <h1> No Item </h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.task.items,
});

export default connect(mapStateToProps)(List);
