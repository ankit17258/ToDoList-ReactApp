import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Easy German" },
        { text: "React course" },
        { text: "Lange Schlafen" }
      ]
    };
  }
  
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    const todos=this.state.todos;
    const updatedTodos = [];
    todos.map((todo)=>updatedTodos.push(todo));
    updatedTodos.push({text:text})
    this.setState({
      todos: updatedTodos
    });
  };
  

  handleRemove = (text) => {
      var updated=this.state.todos.filter((ele)=>ele.text!=text);
      this.setState({
        todos:updated 
      })
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd}/>
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
