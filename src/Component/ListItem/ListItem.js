import React from "react";
import { removeItem } from "../../Api";
import "./ListItem.css";
import deleteIcon from "../../assets/deleteIcon.png";

export default function ListItem({ item, setItemList, setIsLoading }) {
  async function handleDelete() {
    setIsLoading(true);
    const newList = await removeItem(item);

    setItemList(newList);
    setIsLoading(false);
    // setItemList((itemList) => itemList.filter((el) => el !== item));
  }

  return (
    <div className="listItemContent">
      <span>{item}</span>
      <img
        className="delete"
        src={deleteIcon}
        alt="delete"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this item?"))
            handleDelete();
        }}
      />
      {/* <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this item?"))
            handleDelete();
        }}
      >
        delete
      </button> */}
    </div>
  );
}
