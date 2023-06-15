import Header from "../../components/Header";
import Next from "../../assets/icon-next.svg";
import styles from "../../styles/Pedido.module.css";

function Pedido() {
  return (
    <div className={styles["content_boss_pedido"]}>
      <Header />
      <div className="content_main_pedido">
        <div className="content_login_pedido">
          <div className="content_text">
            <p className="title_pedido">Inicia Sesión</p>
            <p className="description_pedido">
              Iniciar sesión o registrate para ver los pedidos realizados y
              pendientes.
            </p>
          </div>
          <div className="separacion"></div>
          <div className="content_button">
            <button className="inicia_sesion">
              Iniciar Sesión
              <span className="icon">
                <img src={Next} />
              </span>
            </button>
            <button className="registrar">
              Registrar
              <span className="icon">
                <img src={Next} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedido;
