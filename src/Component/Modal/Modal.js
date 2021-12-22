import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal({ setShowModal, setItemList, itemList }) {
  const [input, setInput] = useState("");

  function validate(input) {
    const found = itemList.find((el) => el === input);

    if (found) return 1;
    if (input.length === 0) return 2;

    return false;
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    const error = validate(input);

    if (error === 2) {
      alert("Debe agergar un tarea");
    } else if (error === 1) {
      alert("Dicha tarea ya se encuentra listada");
    } else if (!error) {
      setItemList((items) => items.concat(input));
      handleClose();
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="modal">
      <div className="modalConteiner">
        <h3>Add item</h3>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          autoFocus
          onKeyPress={handleKeyPress}
        ></input>
        <div className="botonBox">
          <button className="close" onClick={handleClose}>
            Close
          </button>
          <button
            className={`${input ? "btnready" : "add"}`}
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
