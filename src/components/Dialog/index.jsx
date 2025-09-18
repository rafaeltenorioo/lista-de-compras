import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // nunca fazer referencia JS diretamente com React!
  //   const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);

    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  // toda vez que 'isOpen' mudar, o useEffect vai ser chamado

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>

          <div className="body">{children}</div>
        </div>
      </dialog>
    </>
  );
}
