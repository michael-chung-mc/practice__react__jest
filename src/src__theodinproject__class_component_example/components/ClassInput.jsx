/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      count: 2,
      edit: false,
      editVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleReSubmit = this.handleReSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleInputEdit = (e) => {
    this.setState((state) => ({
      ...state,
      editVal: e.target.value,
    }));
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
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
        ...state,
        todos: arr,
        inputVal: '',
        count: this.state.todos.length-1,
    }));
  };
  handleEdit = () => {
    this.setState((state)=> ({
      ...state,
      edit: true,
    }));
  }
  handleReSubmit = (index) => {
    let arr = [];
    for (let i = 0; i < this.state.todos.length; i++)
    {
        if (i == index)
        {
            arr.push(this.state.editVal);
        }
        else
        {
            arr.push(this.state.todos[i]);
        }
    }
    this.setState((state)=> ({
        ...state,
        todos: arr,
        edit: false,
        editVal: "",
    }));
  };

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
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.edit ?
                <input defaultValue={todo} onChange={this.handleInputEdit}></input> :
                <>{todo}</>
              }
              {this.state.edit ?
                <button onClick={()=>this.handleReSubmit(index)}>Resubmit</button> :
                <button onClick={this.handleEdit}>Edit</button> 
              }
              <button onClick={()=>this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
