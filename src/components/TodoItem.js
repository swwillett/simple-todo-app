import React, { useState } from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
};

const TodoItemDisplay = ({ todo, onEdit, deleteTodoProps }) => {
  const { status, id, title } = todo;

  return (
    <li className="todo-item">
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      {status != "done" ? <button onClick={onEdit}>Edit</button> : <></>}
      <span style={status === "done" ? completedStyle : null}>{title}</span>
    </li>
  );
};

const TodoItemEdit = ({ todo, onSave, onCancel }) => {
  const { id, title, status } = todo;

  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);

  return (
    <li className="todo-item">
      <input
        type="text"
        className="input-edit"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={() => onSave(id, newStatus, newTitle)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </li>
  );
};

const TodoItem = ({ todo, updateTodoItem, deleteTodoProps }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSave = (id, newStatus, newTitle) => {
    updateTodoItem(id, newStatus, newTitle);
    setIsEditing(false);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <TodoItemEdit todo={todo} onSave={onSave} onCancel={onCancel} />
  ) : (
    <TodoItemDisplay
      todo={todo}
      onEdit={onEdit}
      deleteTodoProps={deleteTodoProps}
    />
  );
};

export default TodoItem;
