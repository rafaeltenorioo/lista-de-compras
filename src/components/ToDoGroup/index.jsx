import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({ heading, itens }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {itens.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
