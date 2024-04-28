import Checkbox from './Checkbox';

export default function ToDoListContent({ list, handleCheck, handleDelete }) {
  return (
    <div>
      {list.length ? (
        <ul>
          {list.map((item) => {
            const taskStyle = item.checked
              ? { textDecoration: 'line-through' }
              : {};

            return (
              <li className="mb-2 flex text-2xl" key={item.id}>
                <Checkbox
                  key={item.id}
                  id={item.id}
                  checked={item.checked}
                  onChange={handleCheck}
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  className="mx-2"
                  style={taskStyle}
                >
                  <h3>{item.item}</h3>
                </label>
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
        <h3 className="mt-8"> Empty List </h3>
      )}
    </div>
  );
}
