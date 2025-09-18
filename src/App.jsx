import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus } from "./components/icons";

import { ToDoForm } from "./components/toDoForm";
import ToDoContext from "./components/ToDoContext";
import { ToDoGroup } from "./components/ToDoGroup";
import { use } from "react";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    todos,
    addToDo,
    showDialog,
    openFormToDoDialog,
    closeFormToDoDialog,
    selectedToDo,
    editToDo,
  } = use(ToDoContext);

  const handleFormSubmit = (formData) => {
    if (selectedToDo) {
      editToDo(formData);
    } else {
      addToDo(formData);
    }
    closeFormToDoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>Lista de Compras</Heading>
        </Header>

        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para comprar"
            itens={todos.filter((t) => !t.completed)}
          />
          {todos.length == 0 && <EmptyState />}
          <ToDoGroup
            heading="Comprado"
            itens={todos.filter((t) => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormToDoDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedToDo?.description}
              />
            </Dialog>

            <FabButton onClick={() => openFormToDoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
