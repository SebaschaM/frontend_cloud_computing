import Flecha from "../../assets/Atras.png";
import Fondo from "../../assets/Fondo.png";
import styles from "../../styles/Login.module.css";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function Register() {

  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { Register } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    setFormData(data);
    const register = await Register(data.fullname, data.email, data.password, data.phone)

    console.log(data.phone);
    if (register.fullname) {
      setMessage('Registro exitoso')
      setTimeout(() => { return navigate("/login"); }, 2000)
    } else {
      setMessage(register.message)
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}
            className={styles.content_form}>
            <input
              type="text"
              placeholder="Nombre completo"
              {...register('fullname', {
                required: {
                  value: true,
                  message: "Ingrese su Nombre completo"
                },
                pattern: {
                  value:  /^[a-zA-Z0-9]{6,10}$/,
                  message: "El formato no es correcto, mínimo 6 letras"
                }
              })} />
            {errors.fullname && <span className={styles.mensaje_error}>{errors.fullname.message}</span>}
            <input
              type="password"
              placeholder="Contraseña"
              {...register('password', {
                required: {
                  value: true,
                  message: "Ingrese una Contraseña"
                },
                pattern: {
                  value:  /^[a-zA-Z0-9]{3,10}$/,
                  message: "El formato no es correcto, mínimo 3 letras"
                }
              })} />
            {errors.password && <span className={styles.mensaje_error}>{errors.password.message}</span>}
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register('email', {
                required: {
                  value: true,
                  message: "Ingrese un Correo electrónico"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato no es correcto"
                }
              })} />
            {errors.email && <span className={styles.mensaje_error}>{errors.email.message}</span>}
            <input
              type="number"
              placeholder="Celular"
              {...register('phone', {
                required: {
                  value: true,
                  maxLength: 9,
                  message: "Ingrese un teléfono"
                },
                pattern: {
                  value: /^[0-9]{9}$/i,
                  message: "Ingrese un número de teléfono válido de 9 dígitos"
                }
              })} />
            {errors.phone && <span className={styles.mensaje_error}>{errors.phone.message}</span>}

            <button type="submit" className={styles.btn_ingresar}>
              Registrar
            </button>

            {/* mostrar mensaje */}
            {message && <span className={styles.mensaje_error}>{message}</span>}
          </form>
          <div className={styles.content_foot}>
            <p>¿Ya tiene una cuenta?</p>


            <button type="" className={styles.text}>
              Inicia Sesión
            </button>

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
