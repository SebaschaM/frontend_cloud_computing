import Flecha from "../../assets/Atras.png";
import Fondo from "../../assets/Fondo.png";
import styles from "../../styles/Login.module.css";

function Register() {
  return (
    <div className={styles["content_boss"]}>
      <div className="content_input">
        <div className="content_flecha">
          <button className="Atras">
            <img className="flecha" src={Flecha} />
          </button>
        </div>
        <div className="content_datos">
          <div className="content_title">
            <p className="title">Registrate</p>
            <p className="description">Bienvenido a nuestra página</p>
          </div>
          <form onSubmit="" className="content_form">
            <input type="text" placeholder="Nombre completo"></input>
            <input type="password" placeholder="Contraseña"></input>
            <input type="email" placeholder="Correo electrónico"></input>
            <input type="number" placeholder="Celular"></input>
            <button type="submit" className="btn_ingresar">
              Registrar
            </button>
          </form>
          <div className="content_foot">
            <p>¿Ya tiene una cuenta?</p>
            <button type="" className="text">
              Inicia Sesión
            </button>
          </div>
        </div>
      </div>
      <div className="content_fondo">
        <div className="fondo">
          <img src={Fondo}></img>
        </div>
        <div className="fondo_description">
          <div className="separacion"></div>
          <p>“Un viaje de sabores en cada botella que abrimos”</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
