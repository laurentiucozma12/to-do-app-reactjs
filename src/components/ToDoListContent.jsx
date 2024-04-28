import Checkbox from './Checkbox';

export default function ToDoListContent({ list, handleCheck, handleDelete }) {
  return (
    <div>
      {list.length ? (
        <ul>
          {list.map((item) => {
            return (
              <li className="flex text-2xl" key={item.id}>
                <Checkbox
                  key={item.id}
                  id={item.id}
                  checked={item.checked}
                  onChange={handleCheck}
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  className="mx-2"
                >
                  <h3>{item.item}</h3>
                </label>
                <button
                  className="hover:text-red-600"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className="mt-8"> Empty List </h3>
      )}
    </div>
  );
}
