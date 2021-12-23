// Funcion para agregar items al Local localStorage  ASINCRONICO

export const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getListApi());
    }, 1000);
  });
};

export const addItem = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(addItemApi(item)), 1000);
  });
};

export const removeItem = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(removeItemApi(item)), 1000);
  });
};

// MANEJO LOCAL STORAGE

export const getListApi = () => {
  return JSON.parse(localStorage.getItem("List")) || [];
};

export const addItemApi = (item) => {
  const list = getListApi();

  const newList = list.concat(item);
  localStorage.setItem("List", JSON.stringify(newList));

  return newList;
};

export const removeItemApi = (item) => {
  const newList = getListApi().filter((el) => el !== item);

  localStorage.setItem("List", JSON.stringify(newList));

  return newList;
};
