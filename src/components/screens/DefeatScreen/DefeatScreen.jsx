import "./DefeatScreen.scss";
import { Modal } from "../../Modal/Modal";
import PropTypes from "prop-types";

DefeatScreen.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

function DefeatScreen({ onRestart, onCloseModal, score }) {
  return (
    <Modal onClose={onRestart} onCloseModal={onCloseModal}>
      <h1 className="modal-title">You Lost</h1>
      <p className="modal-score">Score: {score}</p>
      <button className="modal-button" onClick={onRestart}>
        New game!
      </button>
    </Modal>
  );
}

export { DefeatScreen };
