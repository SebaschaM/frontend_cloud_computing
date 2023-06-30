import Header from "../../components/Header_Logeado";
import styles from "../../styles/Perfil.module.css";
import stylesPedido from "../../styles/Pedido.module.css";
import Next from "../../assets/icon-next.svg";
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

function Perfil_Actualizar() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const { ActualizarPerfil } = useAuth();
  const [message, setMessage] = useState('')
  const [updateUserData, setUserData] = useState({
    id: '',
    fullname: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleUpdateProfile = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores actualizados de los campos de entrada
    const updatedFullname = event.target.elements.fullname.value;
    const updatedPhone = event.target.elements.phone.value;
    const updatedEmail = event.target.elements.email.value;
   

    // Obtén los datos actuales del perfil del Local Storage
    const user = localStorage.getItem('user');
    
    if (user) {
      const userData = JSON.parse(user);
      const token = userData.token 

      // Realiza las actualizaciones necesarias en los datos del perfil
      userData.fullname = updatedFullname;
      userData.phone = updatedPhone;
      userData.email = updatedEmail;
      const updatedUserData = { ...updateUserData };

      updatedUserData.id = userData.user.id;
      updatedUserData.fullname = updatedFullname;
      updatedUserData.phone = updatedPhone;
      updatedUserData.email = updatedEmail;
      updatedUserData.password = userData.user.password;

      setUserData(updatedUserData);

      console.log(JSON.stringify(updatedUserData));

      // Guarda los datos actualizados en el Local Storage
      localStorage.setItem('user', JSON.stringify(userData));

      // Actualiza el estado del perfil si es necesario
      setProfile(updatedUserData);
      const perfil = ActualizarPerfil(updatedUserData, token)
    if (perfil.fullname) {
      return navigate("/perfil");
    }else{
      setMessage(perfil.message)
    }
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    // setProfile(user);
    if (user) {
      const userData = JSON.parse(user);
      setProfile(userData.user);
    }

  },[]);
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
                  required="true"
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
                  required="true"
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
                  required="true"
                  defaultValue={profile.email}
                  name="email"
                  id="inputemail"
                />
              </div>

              {/* <div className={styles.filas}>
                <p>Contraseña</p>
                <input type="password" readOnly  />
              </div> */}
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
    </>
  );
}
export default Perfil_Actualizar;
