import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import TodoItem from "./todoItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  renderTodos = () => {
    return this.state.todos.map(item => {
      return <TodoItem title={item} />;
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>
        <form className="add-todo">
          <input
            type="text"
            placeholder="  Add To-Do"
            onChange={this.onChange}
            value={this.state.todo}
          />
          <button onClick={this.addTodo}>Add</button>
          {/* <button onClick={this.clear}>Clear</button> */}
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// for (let i = 0; i in this.todos; i++) {
//   if (this.todos[i] === "done") {
//     this.setState({
//       todos: null
//     });
//   }
// }
