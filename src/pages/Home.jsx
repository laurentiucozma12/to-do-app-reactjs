import ToDoList from '../components/ToDoList';
import ToDoListContent from '../components/ToDoListContent';
import { useState, useEffect } from 'react';

export default function Home() {
  const API_url = 'http://localhost:3500/items';

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_url);

        if (!response.ok) throw Error('Error Message');

        const listItem = await response.json();

        setList(listItem);

        setError(null);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // Add new Item to the list

  const addItems = async (item) => {
    const id = list.length ? list[list.length - 1].id + 1 : 1;

    const theNewItem = {
      id,

      checked: false,

      item,
    };

    const listItem = [...list, theNewItem];

    setList(listItem);

    const postOptions = {
      method: 'POST',

      headers: {
        'content-Type': 'application/json',
      },

      body: JSON.stringify(theNewItem),
    };

    const result = await request(API_url, postOptions);
    if (result) setError(result);
  };

  //  Create a function to update the checked property

  const handleCheck = async (id) => {
    const listItem = list.map((item) =>
      item.id === id
        ? {
            ...item,

            checked: !item.checked,
          }
        : item,
    );

    setList(listItem);

    const myitem = listItem.filter((list) => list.id === id);

    const updateOptions = {
      method: 'PATCH',

      headers: {
        'content-Type': 'application/json',
      },

      body: JSON.stringify({
        checked: myitem[0].checked,
      }),
    };

    const reqUrl = `${API_url}/${id}`;

    const result = await request(reqUrl, updateOptions);

    if (result) setError(result);
  };

  //  create a function to edit an item

  const handleEdit = async (id, editedItem) => {
    const itemIndex = list.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      console.error('Item not found');
      return;
    }
    const updatedList = [...list];
    updatedList[itemIndex] = {
      ...updatedList[itemIndex],
      item: editedItem,
    };
    setList(updatedList);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: editedItem }),
    };
    try {
      const reqUrl = `${API_url}/${id}`;
      const response = await fetch(reqUrl, updateOptions);
      if (!response.ok) throw Error('Error Message');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  //  create a function to delete an item

  const handleDelete = async (id) => {
    const listItem = list.filter((item) => item.id !== id);

    setList(listItem);

    const deleteOptions = {
      method: 'DELETE',
    };

    const reqUrl = `${API_url}/${id}`;

    const result = await request(reqUrl, deleteOptions);

    if (result) setError(result);
  };

  //  create a function to prevent default submit action
  const handleSubmit = (e) => {
    e.preventDefault();

    addItems(newItem);

    setNewItem('');
  };

  return (
    <div className="flex justify-center">
      <div className="my-4 w-80 rounded-xl bg-indigo-100 px-4 pt-3 dark:bg-indigo-700 xl:w-[500px]">
        <ToDoList
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <ToDoListContent
          list={list}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
