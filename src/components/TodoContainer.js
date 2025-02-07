import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
    },
  ]);

  const handleChange = (id, newCompleted, newTitle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = newCompleted;
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};
export default TodoContainer;
