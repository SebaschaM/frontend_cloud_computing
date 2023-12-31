import Header from "../../components/Header";
import styles from "../../styles/Perfil.module.css";
import stylesPedido from "../../styles/Pedido.module.css";
import Next from "../../assets/icon-next.svg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Perfil() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const userData = JSON.parse(user);

      setProfile(userData.user);
    }
  }, []);

  const handleCerrarSesion = (event) => {
    event.preventDefault();
    //Cerrar sesion - se eliminar local storage
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/");
  }

  return (
    <>

      <Header />
      <div className={stylesPedido.content_main_pedido_logeado}>
        <div className={stylesPedido.content_login_pedido_logeado}>
          <div className={`${stylesPedido.content_text} ${stylesPedido.logeado}`}>
            <p className={stylesPedido.title_pedido_logeado}>Perfil</p>
            <p className={stylesPedido.description_pedido}>
              Actualizar y editar tus datos personales, para un envio de
              productos exitosos.
            </p>
          </div>
          <div className={stylesPedido.content_buton_Pedido}>

            <Link to="/perfil" className={stylesPedido.btn_Activo_Complete}>
              <button className={`${stylesPedido.btn_Activo} ${stylesPedido.btnSelect}`}>Datos personales</button>
            </Link>

            <Link to="/perfilActualizar" className={stylesPedido.btn_Activo_Complete}>
              <button className={`${stylesPedido.btn_Completado} ${stylesPedido.btnNoselect}`}>Actualizar Datos</button>
            </Link>
          </div>
        </div>
        <div className={styles.datos_main}>
          <form className={styles.content_form_datos}>
            <div className={styles.content_form_title}>
              <p className={styles.title_perfil}>Datos Personales:</p>
            </div>
            <div className={styles.content_detalledatos1}>
              <div className={styles.filas}>
                <p>Nombres y Apellidos</p>
                <input
                  className={styles.input_perfil}
                  type="text"
                  readOnly
                  defaultValue={profile.fullname}
                />
              </div>
              <div className={styles.filas}>
                <p>Teléfono</p>
                <input
                  className={styles.input_perfil}
                  type="text"
                  readOnly
                  defaultValue={profile.phone}
                />
              </div>
            </div>

            <div className={styles.content_detalledatos2}>
              <div className={styles.filas}>
                <p>Correo electrónico</p>
                <input
                  className={styles.input_perfil}
                  type="email"
                  readOnly
                  defaultValue={profile.email}
                />
              </div>
            </div>

            <div className={styles.cerrar_btn}>
              <button className={stylesPedido.Cancelar} onClick={handleCerrarSesion}>
                Cerrar Sesión
                <span className={stylesPedido.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Perfil;