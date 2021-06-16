import styles from "./Login.module.scss";
import Modal from "react-modal";
import useModal from "../../hooks/useModal";
import { ImProfile } from "react-icons/all";
Modal.setAppElement(".root");

export default function Login() {
  const hook = useModal();
  return (
    <div className={styles.login}>
      <button href="/" onClick={hook.openModal} className={styles.btn}>
        <ImProfile />
        Sign In
      </button>

      <Modal
        className={styles.modal}
        isOpen={hook.modalIsOpen}
        onAfterOpen={hook.afterOpenModal}
        onRequestClose={hook.closeModal}
        contentLabel="Example Modal"
        overlayClassName={styles.overlay}
      >
        <div className={styles["modal-form"]}>
          <div className={styles["modal-logo"]}>Digisoul</div>
          <h1 className={styles["modal-title"]}>Welcome!</h1>
          <span className={styles["modal-text"]}>
            Log into your account to continue
            <br />
            or
            <br />
            Sign up
          </span>
          <button onClick={hook.closeModal}>close</button>
          <div>I am a modal</div>
        </div>
      </Modal>
    </div>
  );
}
