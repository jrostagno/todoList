import React from "react";
import { useState } from "react";
import "./Modal.css";
import { addItem } from "../../Api";

export default function Modal({
  setShowModal,
  setItemList,
  itemList,
  setIsLoading,
}) {
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

  async function handleSubmit() {
    const error = validate(input);

    if (error === 2) {
      alert("Debe agergar un tarea");
    } else if (error === 1) {
      alert("Dicha tarea ya se encuentra listada");
    } else if (!error) {
      setIsLoading(true);
      setShowModal(false);
      const newlist = await addItem(input);

      setItemList(newlist);
      handleClose();
      setIsLoading(false);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  const isDisable = input === "" || validate(input) === 1;

  return (
    <div className="modal" onKeyPress={handleKeyPress}>
      <div className="modalConteiner">
        <h3>Add item</h3>
        <input type="text" onChange={(e) => handleChange(e)} autoFocus></input>
        <div className="botonBox">
          <button className="close" onClick={handleClose}>
            Close
          </button>
          <button
            className={`${isDisable ? "add" : "btnready"}`}
            onClick={handleSubmit}
            disabled={isDisable}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
