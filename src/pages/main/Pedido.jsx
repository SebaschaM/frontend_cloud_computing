import Header from "../../components/Header";
import Next from "../../assets/icon-next.svg";
import styles from "../../styles/Pedido.module.css";
import { Link } from "react-router-dom";

function Pedido() {
  return (
    <div className={styles.content_boss_pedido}>
      <Header />
      <div className={styles.content_main_pedido}>
        <div className={styles.content_login_pedido}>
          <div className={styles.content_text}>
            <p className={styles.title_pedido}>Inicia Sesión</p>
            <p className={styles.description_pedido}>
              Iniciar sesión o registrate para ver los pedidos realizados y
              pendientes.
            </p>
          </div>
          <div className={styles.separacion}></div>
          <div className={styles.content_button}>
            <Link to="/login">
              <button className={styles.inicia_sesion}>
                Iniciar Sesión
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </Link>

            <Link to="/register">
              <button className={styles.registrar}>
                Registrar
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedido;
