import { Component } from "react";

export class Todo extends Component {
  render() {
    var {handleRemove}=this.props;
    var {text}=this.props.todo;
    return (
      <div className="todo">
        <p>{text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>handleRemove(text)}>x</button>
      </div>
    );
  }
}
