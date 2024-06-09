import ReactDOM from "react-dom";
import "./Modal.scss";
import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

function Modal({ children, onClose, onCloseModal }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close" onClick={onCloseModal}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}

export { Modal };
