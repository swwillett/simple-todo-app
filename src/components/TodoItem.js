import React, { useState } from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
};

const TodoItemDisplay = ({
  todo,
  onEdit,
  handleChangeProps,
  deleteTodoProps,
}) => {
  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id, !completed, title)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      {!completed ? <button onClick={onEdit}>Edit</button> : <></>}
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

const TodoItemEdit = ({ todo, onSave, onCancel }) => {
  const { id, title } = todo;

  const [newTitle, setNewTitle] = useState(title);

  return (
    <li className="todo-item">
      <input
        type="text"
        className="input-edit"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <button onClick={() => onSave(id, newTitle)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </li>
  );
};

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSave = (id, newTitle) => {
    handleChangeProps(id, todo.completed, newTitle);
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
      handleChangeProps={handleChangeProps}
      deleteTodoProps={deleteTodoProps}
    />
  );
};

export default TodoItem;
