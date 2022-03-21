import Modal from "react-modal";
import logoImg from "../../assets/Horizon_horiz_br.png";
import { Container } from "./styles";

Modal.setAppElement("#root");

export function LoginModal({ isLoginModalOpen, handleCloseLoginModal, auth }) {
  return (
    <Modal
      isOpen={isLoginModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <img src={logoImg} alt="horizonfy logo" className="login-logo" />

        <p>
          O login do Spotify é necessário para poder exibir os dados do usuário.
          Após terminar você será redirecionado de volta.
        </p>
        <p>
          <span>
            Nota: Todos os dados acessados por este aplicativo são somente
            leitura e não privados. Seus dados estão seguros.
          </span>
        </p>
        <button>
          <a onClick={handleCloseLoginModal} href={auth}>
            Ir para o login do Spotify
          </a>
        </button>
      </Container>
    </Modal>
  );
}
