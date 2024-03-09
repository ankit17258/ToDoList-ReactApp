import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  render() {
    var {handleRemove}=this.props;
    return (
      <div className="list">
        {this.props.todos.map((todo) => <Todo todo={todo} handleRemove={handleRemove}/>)}
      </div>
    );
  }
}
