import { useRef } from 'react';
import Input from './Input';

export default function ToDoList({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-xl font-bold xl:text-3xl">Add Item</label>
      <div className="flex">
        <Input value={newItem} onChange={setNewItem} inputRef={inputRef} />

        <button
          className="text-2xl"
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <h3
            className=" rounded-xl bg-green-300 px-3 pb-1 text-2xl font-bold duration-700 hover:bg-green-200 hover:text-green-700 
                      dark:bg-indigo-800 dark:hover:bg-indigo-500"
          >
            +
          </h3>
        </button>
      </div>
    </form>
  );
}
