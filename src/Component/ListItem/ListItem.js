import React from "react";
import "./ListItem.css";

export default function ListItem({ item, setItemList }) {
  function handleDelete() {
    setItemList((itemList) => itemList.filter((el) => el !== item));
  }

  return (
    <div className="listItemContent">
      <span>{item}</span> <button onClick={handleDelete}>delete</button>
    </div>
  );
}
