import Flecha from "../../assets/Atras.png";
import Fondo from "../../assets/Fondo.png";
import styles from "../../styles/Login.module.css";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className={styles.content_boss}>
      <div className={styles.content_input}>
        <div className={styles.content_flecha}>

          <Link to="/login" className={styles.Atras_main}>
            <button className={styles.Atras}>
              <img className={styles.flecha} src={Flecha} />
            </button>
          </Link>
        </div>
        <div className={styles.content_datos}>
          <div className={styles.content_title}>
            <p className={styles.title}>Registrate</p>
            <p className={styles.description}>Bienvenido a nuestra página</p>
          </div>
          <form onSubmit="" className={styles.content_form}>
            <input type="text" placeholder="Nombre completo"></input>
            <input type="password" placeholder="Contraseña"></input>
            <input type="email" placeholder="Correo electrónico"></input>
            <input type="number" placeholder="Celular"></input>

            <Link to="/login" className={styles.btn_ingresar_main}>
              <button type="submit" className={styles.btn_ingresar}>
                Registrar
              </button>
            </Link>
          </form>
          <div className={styles.content_foot}>
            <p>¿Ya tiene una cuenta?</p>

            <Link to="/login" className={styles.text_main}>
              <button type="" className={styles.text}>
                Inicia Sesión
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content_fondo}>
        <div className={styles.fondo}>
          <img src={Fondo}></img>
        </div>
        <div className={styles.fondo_description}>
          <div className={styles.separacion}></div>
          <p>“Un viaje de sabores en cada botella que abrimos”</p>
        </div>
      </div>
    </div>
  );
}

export default Register;