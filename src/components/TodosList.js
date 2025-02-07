import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ title, updateTodoItem, deleteTodoProps, todos }) => {
  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodoItem={updateTodoItem}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
};

export default TodosList;
