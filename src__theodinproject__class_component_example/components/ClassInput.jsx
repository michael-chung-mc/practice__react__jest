/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      count: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

//   componentDidUpdate(prevProps) {
//     if (this.props.userID != prevProps.userID) {
//         this.setState((state) => ({
//           ...state,
//           count: this.state.todos.length,
//         }));
//     }
//   }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
      count: this.state.todos.length+1,
    }));
  }
  
  handleDelete = (index) => {
    let arr = [];
    for (let i = 0; i < this.state.todos.length; i++)
    {
        if (i != index)
        {
            arr.push(this.state.todos[i]);
        }
    }
    this.setState((state)=> ({
        todos: arr,
        inputVal: '',
        count: this.state.todos.length-1,
    }));
  };

  handleEdit = (index, text) => {
    let arr = [];
    for (let i = 0; i < this.state.todos.length; i++)
    {
        if (i == index)
        {
            arr.push(text);
        }
        else
        {
            arr.push(this.state.todos[i]);
        }
    }
    this.setState((state)=> ({
        todos: arr,
        ...state,
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>{this.state.count} tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo,index) => (
            <li> 
                <input key={index} value={todo} onChange={(e)=>this.handleEdit(index, e.target.value)}></input>
                <button onClick={()=>this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
