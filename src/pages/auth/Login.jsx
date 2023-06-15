import Flecha from "../../assets/Atras.png";
import Fondo from "../../assets/Fondo.png";
import styles from "../../styles/Login.module.css";

function Login() {
  return (
    <div className={styles["content_boss"]}>
      <div className={styles["content_input"]}>
        <div className={styles["content_flecha"]}>
          <button className={styles.Atras}>
            <img className={styles.flecha} src={Flecha} />
          </button>
        </div>
        <div className={styles["content_datos"]}>
          <div className={styles["content_title"]}>
            <p className={styles.title}>Inicia Sesión</p>
            <p className={styles.description}>Bienvenido a nuestra página</p>
          </div>
          <form onSubmit="" className={styles["content_form"]}>
            <input type="email" placeholder="Correo electrónico"></input>
            <input type="password" placeholder="Contraseña"></input>
            <button type="submit" className={styles["btn_ingresar"]}>
              Ingresar
            </button>
          </form>
          <div className={styles["content_foot"]}>
            <p>¿Aún no tienes una cuenta?</p>
            <button type="" className={styles.text}>
              Registrate aquí
            </button>
          </div>
        </div>
      </div>
      <div className={styles["content_fondo"]}>
        <div className={styles.fondo}>
          <img src={Fondo}></img>
        </div>
        <div className={styles["fondo_description"]}>
          <div className={styles.separacion}></div>
          <p>“Un viaje de sabores en cada botella que abrimos”</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
