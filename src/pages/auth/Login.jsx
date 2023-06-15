import Flecha from "../../assets/Atras.png";
import Fondo from "../../assets/Fondo.png";
import styles from "../../styles/Login.module.css";
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({});
  // const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = async data => {
  //   setFormData(data);

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/auth/login', data);
  //     console.log(response.data);
  //     if (response.data.success) {
  //       navigate("/home");
  //     } else {
  //       console.log("Error en el registro");
  //     }
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

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
          <form
            // onSubmit={handleSubmit(onSubmit)} 
            className={styles["content_form"]}>
            <input type="email" placeholder="Correo electrónico"
            // {...register("email", {
            //   required: {
            //     value: true,
            //     message: "Necesitas este campo"
            //   },
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            //     message: "El formato no es correcto"
            //   }
            // })}
            />
            {/* {errors.email && <span className="content_error">{errors.email.message}</span>} */}
            <input type="password" placeholder="Contraseña"
            // {...register("password", {
            //   required: {
            //     value: true,
            //     message: "Necesitas este campo"
            //   },
            //   minLength: {
            //     value: 6,
            //     message: "La contraseña debe tener al menos 6 caracteres"
            //   }
            // })}
            />
            {/* {errors.password && <span className="content_error">{errors.password.message}</span>} */}

            <Link to="/" className={styles.btn_ingresar_main}>
              <button type="submit" className={styles.btn_ingresar}>
                Ingresar
              </button>
            </Link>
          </form>
          <div className={styles["content_foot"]}>
            <p>¿Aún no tienes una cuenta?</p>

            <Link to="/register">
              <button type="" className={styles.text}>
                Registrate aquí
              </button>
            </Link>
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
