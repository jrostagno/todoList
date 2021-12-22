import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Component/Modal/Modal";
import ListItem from "./Component/ListItem/ListItem";

function App() {
  const [itemList, setItemList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("Lista de Compras", JSON.stringify(itemList));
  }, [itemList]);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <h2>Supermarket List</h2>
      <p>
        <span className="number">{itemList.length}</span>items(s)
      </p>
      <div className="contentList">
        {itemList.map((item, i) => (
          <ListItem item={item} key={i} setItemList={setItemList} />
        ))}
      </div>

      <button className="addItemButton" onClick={handleClick}>
        Add item
      </button>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setItemList={setItemList}
          itemList={itemList}
        />
      )}
    </div>
  );
}

export default App;
