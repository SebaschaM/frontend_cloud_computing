import photo from "../assets/usuario.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.content_main}>
      <div className={styles.content_title_sucursal}>
        <p>Local:</p>
        <p className={styles.name_sucursal}>Licorería “León”</p>
      </div>
      <div className={styles.content_menu}>
        <p className={styles.init}>Inicio</p>
        <p className={styles.products}>Productos</p>
        <p className={styles.about}>Sobre nosotros</p>
        <p className={styles.orders}>Pedidos</p>

        <div className={styles.content_sucursal_main}>
          <div className={styles.content_sucursal}>
            <svg
              className={styles.logo_sucursal}
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
            >
              <path d="M840-519v339q0 24-18 42t-42 18H179q-24 0-42-18t-18-42v-339q-28-24-37-59t2-70l43-135q8-27 28-42t46-15h553q28 0 49 15.5t29 41.5l44 135q11 35 1.5 70T840-519Zm-270-31q29 0 49-19t16-46l-25-165H510v165q0 26 17 45.5t43 19.5Zm-187 0q28 0 47.5-19t19.5-46v-165H350l-25 165q-4 26 14 45.5t44 19.5Zm-182 0q24 0 41.5-16.5T263-607l26-173H189l-46 146q-10 31 8 57.5t50 26.5Zm557 0q32 0 50.5-26t8.5-58l-46-146H671l26 173q3 24 20.5 40.5T758-550ZM179-180h601v-311q1 1-6.5 1H758q-25 0-47.5-10.5T666-533q-16 20-40 31.5T573-490q-30 0-51.5-8.5T480-527q-15 18-38 27.5t-52 9.5q-31 0-55-11t-41-32q-24 21-47 32t-46 11h-13.5q-6.5 0-8.5-1v311Zm601 0H179h601Z" />
            </svg>
          </div>
          <div className={styles.sucursal_div}>
            <select className={styles.sucursal}>
              <option value="Licorería León">Licorería León</option>
              <option value="Villa el Salvador">Villa el Salvador</option>
              <option value="Lorem">Lorem</option>
              <option value="Imput">Imput</option>
            </select>
          </div>
        </div>

        <button className={styles.btn_carrito}>
          <svg
            className={styles.logo_carrito}
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 -960 960 960"
            width="100%"
          >
            <path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
          </svg>
        </button>
        <div className={styles.content_userlogeado}>
          <div className={styles.user_name}>
            <p className={styles.nameHeader}>Kenneth De La Cruz</p>
            <p className={styles.phoneHeader}>+51 982630170</p>
          </div>
          <div className={styles.user_photo}>
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;