import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./to-do-form.style.css";

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="to-do-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>Salvar item</Button>
    </form>
  );
}
