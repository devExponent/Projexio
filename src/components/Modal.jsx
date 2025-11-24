import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <dialog>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("root")
  );
};

export default Modal;
