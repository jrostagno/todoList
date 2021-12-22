import React from "react";
import "./ListItem.css";

export default function ListItem({ item, setItemList }) {
  function handleDelete() {
    setItemList((itemList) => itemList.filter((el) => el !== item));
  }

  return (
    <div className="listItemContent">
      <span>{item}</span>{" "}
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this item?"))
            handleDelete();
        }}
      >
        delete
      </button>
    </div>
  );
}
