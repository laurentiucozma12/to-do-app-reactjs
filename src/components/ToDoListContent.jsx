import { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

export default function ToDoListContent({
  list,
  handleCheck,
  handleEdit,
  handleDelete,
}) {
  const [editedItem, setEditedItem] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const handleChange = (e) => {
    setEditedItem(e.target.value);
  };

  const handleEditClick = (item) => {
    setEditedItem(item.item); // Set the initial value of the input field to the item's current value
    setEditItemId(item.id); // Set the id of the item being edited
  };

  const handleSubmitEdit = () => {
    if (!editedItem.trim()) return; // Prevent empty values
    handleEdit(editItemId, editedItem);
    setEditedItem('');
    setEditItemId(null);
  };

  const handleCancelEdit = () => {
    setEditedItem('');
    setEditItemId(null);
  };

  return (
    <div>
      {list.length ? (
        <ul>
          {list.map((item) => {
            const taskStyle = item.checked
              ? { textDecoration: 'line-through' }
              : {};

            return (
              <li className="mb-3 flex text-2xl" key={item.id}>
                <Checkbox
                  key={item.id}
                  id={item.id}
                  checked={item.checked}
                  onChange={handleCheck}
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  className="mx-2 flex"
                  style={taskStyle}
                >
                  {/* Show the input field only for the item being edited */}
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      className="w-full rounded-xl px-2 text-lg font-bold duration-700 dark:bg-indigo-800 "
                      value={editedItem}
                      onChange={handleChange}
                    />
                  ) : (
                    <h3>{item.item}</h3>
                  )}
                </label>
                {/* Show the "Edit" button only if the item is not being edited */}
                {editItemId !== item.id && (
                  <button
                    className="mr-2 h-8 rounded-xl bg-yellow-300 px-3 text-lg font-bold duration-700 hover:bg-blue-200 hover:text-blue-700 dark:bg-indigo-800 dark:hover:bg-indigo-100 dark:hover:text-blue-500"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                )}
                {/* Show the "Save" and "Cancel" buttons only if the item is being edited */}
                {editItemId === item.id && (
                  <>
                    <button
                      className="mr-2 h-8 rounded-xl bg-green-300 px-3 text-lg font-bold duration-700 hover:bg-green-200 hover:text-green-700 dark:bg-indigo-800 dark:hover:bg-indigo-100 dark:hover:text-blue-500"
                      onClick={handleSubmitEdit}
                    >
                      Save
                    </button>
                    <button
                      className="mr-2 h-8 rounded-xl bg-blue-300 px-3 text-lg font-bold duration-700 hover:bg-blue-200 hover:text-blue-700 dark:bg-indigo-800 dark:hover:bg-indigo-100 dark:hover:text-blue-500"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                )}
                <button
                  className="h-8 rounded-xl bg-red-300 px-3 text-lg font-bold duration-700 hover:bg-red-200 hover:text-red-700 dark:bg-indigo-800 dark:hover:bg-indigo-100 dark:hover:text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className="mb-3 text-xl font-bold"> Empty List </h3>
      )}
    </div>
  );
}

ToDoListContent.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleCheck: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};
