import "./App.css";
import React from "react";
import { useState } from "react";
import Modal from "./Component/Modal/Modal";
import ListItem from "./Component/ListItem/ListItem";
import loading from "../src/assets/loading.gif";

function App() {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("List")) || []
  );
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <h2>Supermarket List</h2>
      <p>
        <span className="number">{itemList.length}</span>item(s)
      </p>
      {isLoading ? (
        <div>
          <img className="loading" src={loading} alt="Loading" />
        </div>
      ) : (
        <div className="contentList">
          {itemList.map((item, i) => (
            <ListItem
              item={item}
              key={i}
              setItemList={setItemList}
              setIsLoading={setIsLoading}
            />
          ))}
        </div>
      )}

      <button className="addItemButton" onClick={handleClick}>
        Add item
      </button>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setItemList={setItemList}
          itemList={itemList}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default App;
