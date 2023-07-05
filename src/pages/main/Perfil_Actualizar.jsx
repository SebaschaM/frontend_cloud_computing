import Header from "../../components/Header";
import styles from "../../styles/Perfil.module.css";
import stylesPedido from "../../styles/Pedido.module.css";
import Next from "../../assets/icon-next.svg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

function Perfil_Actualizar() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const { ActualizarPerfil } = useAuth();
  const [showModalProduct, setShowModalProduct] = useState(false);

  const [updateUserData, setUserData] = useState({
    id: '',
    fullname: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleUpdateProfile = (event) => {
    event.preventDefault();

    // Obtén los valores actualizados de los campos de entrada
    const updatedFullname = event.target.elements.fullname.value;
    const updatedPhone = event.target.elements.phone.value;
    const updatedEmail = event.target.elements.email.value;

    // Obtén los datos actuales del perfil del Local Storage
    const user = localStorage.getItem('user');

    if (user) {
      const userData = JSON.parse(user);

      // Realiza las actualizaciones necesarias en los datos del perfil
      userData.user.fullname = updatedFullname;
      userData.user.phone = updatedPhone;
      userData.user.email = updatedEmail;

      // Guarda los datos actualizados en el Local Storage
      localStorage.setItem('user', JSON.stringify(userData));
      // Actualiza el estado del perfil si es necesario
      setProfile(userData.user);
    }
  };

  const handleUpdateProfileMain = (event) => {
    event.preventDefault();

    const updatedPassword = event.target.elements.password.value;

    // Obtén los datos actuales del perfil del Local Storage
    const user = localStorage.getItem('user');

    if (user) {
      const userData = JSON.parse(user);
      const token = userData.token

      // Realiza las actualizaciones necesarias en los datos del perfil      
      userData.user.password = updatedPassword;

      // Guarda los datos actualizados en el Local Storage
      localStorage.setItem('user', JSON.stringify(userData));
      // Actualiza el estado del perfil si es necesario
      setProfile(userData.user);

      const updatedUserData = { ...updateUserData };

      //DATOS ACTUALIZADOS PARA ENVIAR AL BACK
      updatedUserData.id = userData.user.id;
      updatedUserData.fullname = userData.user.fullname;
      updatedUserData.phone = userData.user.phone;
      updatedUserData.email = userData.user.email;
      updatedUserData.password = userData.user.password;

      setUserData(updatedUserData);

      const perfil = ActualizarPerfil(updatedUserData, token)

      setShowModalProduct(false);
      return navigate("/perfil");
    }
  };


  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setProfile(userData.user);
    }

  }, []);
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
              <button className={`${stylesPedido.btn_Activo} ${stylesPedido.btnNoselect}`}>Datos personales</button>
            </Link>

            <Link to="/perfilActualizar" className={stylesPedido.btn_Activo_Complete}>
              <button className={`${stylesPedido.btn_Completado} ${stylesPedido.btnSelect}`}>Actualizar Datos</button>
            </Link>
          </div>
        </div>
        <div className={styles.datos_main}>
          <form className={styles.content_form_datos} onSubmit={handleUpdateProfile}>
            <div className={styles.content_form_title}>
              <p className={styles.title_perfil}>Actualizar Datos:</p>
            </div>
            <div className={styles.content_detalledatos1}>
              <div className={styles.filas}>
                <p>Nombres y Apellidos</p>
                <input
                  className={styles.input_perfil}
                  type="text"
                  required
                  defaultValue={profile.fullname}
                  name="fullname"
                  id="inputname"
                />
              </div>
              <div className={styles.filas}>
                <p>Teléfono</p>
                <input
                  className={styles.input_perfil}
                  type="number"
                  required
                  defaultValue={profile.phone}
                  name="phone"
                  id="inputphone"
                />
              </div>
            </div>

            <div className={styles.content_detalledatos2}>
              <div className={styles.filas}>
                <p>Correo electrónico</p>
                <input
                  className={styles.input_perfil}
                  type="email"
                  required
                  defaultValue={profile.email}
                  name="email"
                  id="inputemail"
                />
              </div>
            </div>

            <div className={styles.cerrar_btn}>
              <button className={stylesPedido.Cancelar} type="submit"
                onClick={() => setShowModalProduct(true)}
              >
                Actualizar Datos
                <span className={stylesPedido.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModalProduct && (
        <div className={styles.modal_principal}>
          <div
            className={styles.modal_pedido_main}
            onClick={() => setShowModalProduct(false)}
          ></div>
          <div className={styles.content_modal_pedido}>
            <div className={styles.content__modal_text}>
              <p className={styles.title_modal_pedido}>Actualziar Perfil</p>
              <p className={styles.description_modal_pedido}>
                Ingresa tu contraseña para poder actualizar tus datos.
              </p>
            </div>
            <div className={styles.separacion_modal}></div>

            <form className={styles.content_form_datos} onSubmit={handleUpdateProfileMain}>
              <div className={styles.content_list_product}>
                <div className={styles.content_detalledatos1}>
                  <div className={styles.filas}>
                    <p>Ingresa tu contraseña:</p>
                    <input
                      className={styles.input_perfil}
                      type="password"
                      required
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.cerrar_btn}>
                <button className={stylesPedido.Cancelar} type="submit">
                  Actualizar Datos
                  <span className={stylesPedido.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Perfil_Actualizar;
