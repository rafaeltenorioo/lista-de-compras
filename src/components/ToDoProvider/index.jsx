import { useEffect, useState } from "react";
import ToDoContext from "../ToDoContext";

const TODOS = "todos"; //estamos utlizando esse valor 2 vezes para manipular o localStorage. para evitar que a chave esteja errada...fazermos essa simplificação!

export function ToDoProvider({ children }) {
  const savedToDo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedToDo ? JSON.parse(savedToDo) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState();

  const openFormToDoDialog = (toDo) => {
    if (toDo) {
      setSelectedToDo(toDo);
    }
    setShowDialog(true);
  };

  const closeFormToDoDialog = () => {
    setShowDialog(false);
    setSelectedToDo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]); // todas as vezes que 'todo' mudar... isso acontece!

  const addToDo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
    console.log("toDo adicionado");
  };

  const toggleToDoCompleted = (toDo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == toDo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const editToDo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedToDo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  };

  const removeToDo = (toDo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != toDo.id);
    });
  };

  return (
    <ToDoContext
      value={{
        todos,
        addToDo,
        toggleToDoCompleted,
        removeToDo,
        showDialog,
        closeFormToDoDialog,
        openFormToDoDialog,
        selectedToDo,
        editToDo,
      }}
    >
      {children}
    </ToDoContext>
  );
}
