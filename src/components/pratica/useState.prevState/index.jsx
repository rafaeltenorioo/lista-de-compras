import "./pratica.css";

export function ContadorBasico({ aoClicar, children }) {
  return <button onClick={aoClicar}>{children}</button>;
}

export function BtMudaCor({ mudarCor, children, classe }) {
  return (
    <button onClick={mudarCor} className={classe}>
      {children}
    </button>
  );
}

export function BtExcluir({ children, handleExcluir }) {
  return <button onClick={handleExcluir}>{children}</button>;
}
