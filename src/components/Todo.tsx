import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import todoMachine from "../machines/todoMachine";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const Todo: React.FC = () => {
  const [state, send] = useMachine(todoMachine, {});
  const [input, setInput] = useState<string>("");

  const todos: Todo[] = state.context.todoStore || [];

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: v4(),
        text: input,
        completed: false,
        createdAt: new Date(),
      };
      send({ type: "addTodoIntoStore", todo: newTodo });
      setInput("");
    }
  };

  const deleteTodo = (id: string) => {
    send({ type: "removeTodoFromStore", todoId: id });
  };

  return (
    <div className="bg-slate-800 min-h-dvh">
      <div className="p-4 max-w-md mx-auto ">
        <h1 className="text-2xl font-bold mb-4 text-slate-200">Todo App</h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className=" rounded p-2 flex-grow bg-slate-700 outline-none text-slate-100"
          />
          <button
            onClick={addTodo}
            className="bg-slate-500 text-white rounded px-4 py-2"
          >
            Add
          </button>
        </div>
        <ul>
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between mb-2 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <span className="cursor-pointer flex-grow text-slate-200">
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white rounded px-2 py-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
