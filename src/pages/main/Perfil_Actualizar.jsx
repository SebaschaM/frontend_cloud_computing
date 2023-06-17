import Header from "../../components/Header";
import styles from "../../styles/Perfil.module.css";
import styles2 from "../../styles/Pedido.module.css";
import Next from "../../assets/icon-next.svg";

function Perfil_Actualizar() {
  return (
    <>
      <Header />
      <div className={styles.detalle_perfil}>
        <div className={styles.perfil_main}>
          <form className={styles.content_form_perfil}>
            <div className={styles.content_perfil}>
              <p className={styles.title_perfil}>Perfil</p>
              <p>
                Actualizar y editar tus datos personales, para un envio de
                productos exitosos.
              </p>
            </div>
            <div className={styles.content_detalleperfil}>
              <button
                className={`${styles2.btn_Activo} ${styles2.btnNoSelect}`}
              >
                Datos personales
              </button>
              <button
                className={`${styles2.btn_Completado} ${styles2.btnselect}`}
              >
                Actualizar Datos
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.detalle_datos}>
        <div className={styles.datos_main}>
          <form className={styles.content_form_datos}>
            <div>
              <p className={styles.title_perfil}>Datos Personales</p>
            </div>
            <div className={styles.content_detalledatos1}>
              <div className={styles.filas}>
                <p>Nombres y Apellidos</p>
                <input type="text" placeholder="Frank Cabanillas" />
              </div>
              <div className={styles.filas}>
                <p>Teléfono</p>
                <input type="text" placeholder="955040321" maxLenght="9" />
              </div>
            </div>

            <div className={styles.content_detalledatos2}>
              <div className={styles.filas}>
                <p>Correo electrónico</p>
                <input type="email" placeholder="frankero123@gmail.com" />
              </div>

              <div className={styles.filas}>
                <p>Contraseña</p>
                <input type="password" placeholder="2141242" />
              </div>
            </div>

            <div className={styles.cerrar_btn}>
              <button className={styles2.Cancelar}>
                Actualizar Datos
                <span className={styles2.icon}>
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
export default Perfil_Actualizar;
