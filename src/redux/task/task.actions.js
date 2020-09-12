export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const deleteItem = (item) => ({
  type: "DELETE_ITEM",
  payload: item,
});

export const toggleHidden = () => ({
  type: "TOGGLE_HIDDEN",
});
