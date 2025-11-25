import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const Modal = ({ children, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal(); // REQUIRED
  }, []);

  return createPortal(
    <dialog ref={dialogRef}>
      {children}

      <form method="dialog">
        <button onClick={onClose}>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
