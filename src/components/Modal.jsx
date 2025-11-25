import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <dialog>
      {children}
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
