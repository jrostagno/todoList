import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal({ setShowModal, setItemList }) {
  const [input, setInput] = useState("");

  function handleClose() {
    setShowModal(false);
  }

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    setItemList((items) => items.concat(input));
    handleClose();
  }

  return (
    <div className="modal">
      <div className="modalConteiner">
        <h3>Add item</h3>
        <input type="text" onChange={(e) => handleChange(e)}></input>
        <button className="close" onClick={(e) => handleClose()}>
          Close
        </button>
        <button
          className="add"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
