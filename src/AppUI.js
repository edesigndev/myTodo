import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButtom } from './components/CreateTodoButton';
import React from 'react';
import { TodoContext } from './TodoContext';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodosLoading } from './components/TodosLoading';

import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openMOdal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((item, index) => (
          <TodoItem
            text={item.text}
            key={index}
            completed={item.completed}
            onComplete={() => completeTodo(item.text)}
            onDeleteTodo={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      {!!openMOdal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButtom setOpenModal={setOpenModal}></CreateTodoButtom>
    </React.Fragment>
  );
}

export { AppUI };
