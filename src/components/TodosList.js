import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ handleChangeProps, deleteTodoProps, todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
};

export default TodosList;
