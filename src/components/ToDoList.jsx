import { useRef } from 'react';
import Input from './Input';

export default function ToDoList({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-3xl">Add Item</label>
      <div className="flex">
        <Input value={newItem} onChange={setNewItem} inputRef={inputRef} />

        <button
          className="text-2xl"
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <h3 className="text-3xl">+</h3>
        </button>
      </div>
    </form>
  );
}
