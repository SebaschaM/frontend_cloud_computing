import Header from "../../components/Header_Logeado";
import styles from "../../styles/Perfil.module.css";
import stylesPedido from "../../styles/Pedido.module.css";
import Next from "../../assets/icon-next.svg";
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch.JSX";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


function Perfil() {
  const {state} = useContext (StoreContext)
  const { getProfile } = useFetch();
  const [profile, setProfile] = useState([]);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5rQGdtYWlsLmNvbSIsImlkIjozLCJpYXQiOjE2ODc3NDUxMDF9.92ku8Mv7NmIl_QVab7-g7S4VTcBlrK-gBzbL488u--Q";
  const handleBranchList = async () => {
    try {
      const data = await getProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5rQGdtYWlsLmNvbSIsImlkIjozLCJpYXQiOjE2ODc3NDUxMDF9.92ku8Mv7NmIl_QVab7-g7S4VTcBlrK-gBzbL488u--Q");
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleBranchList();
  },);

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
                <input type="text" readOnly defaultValue={profile.fullname}/>
              </div>
              <div className={styles.filas}>
                <p>Teléfono</p>
                <input
                  type="text" readOnly defaultValue={profile.phone}/>
              </div>
            </div>

            <div className={styles.content_detalledatos2}>
              <div className={styles.filas}>
                <p>Correo electrónico</p>
                <input
                  type="email" readOnly defaultValue={profile.email}/>
              </div>

              {/* <div className={styles.filas}>
                <p>Contraseña</p>
                <input type="password" readOnly />
              </div> */}
            </div>

            <div className={styles.cerrar_btn}>
              <Link to="/login" >
                <button className={stylesPedido.Cancelar}>
                  Cerrar Sesión
                  <span className={stylesPedido.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Perfil;