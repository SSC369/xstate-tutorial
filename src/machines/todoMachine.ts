import { assign, createMachine } from "xstate";
import { Todo } from "../components/Todo";

interface todoStore {
  todoStore: Todo[];
}

const loadTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Failed to load todos");
  }
  return await response.json();
};

const todoMachine = createMachine({
  id: "todo",
  initial: "idle",
  context: {
    todoStore: [] as Todo[],
  },
  states: {
    idle: {
      invoke: {
        src: loadTodos,
      },
    },
    active: {
      on: {
        addTodoIntoStore: {
          actions: assign({
            todoStore: (data) => {
              const { context, event } = data;
              const { todoStore } = context;
              const { todo } = event;
              return [...todoStore, todo];
            },
          }),
        },
        removeTodoFromStore: [
          {
            actions: assign({
              todoStore: (data) => {
                const { context, event } = data;
                const { todoStore } = context;
                const { todoId } = event;
                return todoStore.filter((todo: Todo) => todo.id !== todoId);
              },
            }),
            guard: (data) => {
              const { context, event } = data;
              const { todoStore } = context;
              const { todoId } = event;
              const present = new Date();
              const todo: Todo = todoStore.find(
                (todo: Todo) => todoId === todo.id
              )!;
              console.log(present.getTime() - todo.createdAt.getTime());
              if (present.getTime() - todo.createdAt.getTime() > 2000) {
                return true;
              }
              return false;
            },
            target: "deleteSuccess",
          },
          //if guard fails, transitioned to next action.
          {
            target: "active",
          },
        ],
      },
    },
    deleteFailed: {
      entry: () => {
        alert("Deleted Failed wait 2 sec:(");
      },
      after: {
        1000: "active",
      },
    },
    deleteSuccess: {
      entry: () => {
        alert("Deleted :)");
      },
      after: {
        1000: "active",
      },
    },
  },
});

export default todoMachine;