import React, { useState,useEffect } from 'react';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');
  const [count, setCount] = useState(todos.length);

  useEffect(() => {
    setCount(todos.length);
  })

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  const handleDelete = (index) => {
    let arr = [];
    for (let i = 0; i < todos.length; i++)
    {
        if (i != index)
        {
            arr.push(todos[i]);
        }
    }
    setTodos(arr);
  };

  const handleEdit = (index, text) => {
    let arr = [];
    for (let i = 0; i < todos.length; i++)
    {
        if (i == index)
        {
            arr.push(text);
        }
        else
        {
            arr.push(todos[i]);
        }
    }
    setTodos(arr);
  }

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>{count} tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo, index) => (
          <li>
            <input key={index} defaultValue={todo} onChange={(e)=>handleEdit({index}, e.target.value)}></input>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
