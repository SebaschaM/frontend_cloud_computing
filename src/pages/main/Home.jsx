import Header from "../../components/Header_Logeado";
import wine from "../../assets/ImgWine.png";
import item1 from "../../assets/Category1.png";
import product1 from "../../assets/Wine.png";
import licorLogo from "../../assets/Licoreria-name.png";
import styles from "../../styles/Home.module.css";

import Direccion from '../../assets/location-pin.png'
import Tlf from '../../assets/phone-call.png'
import Email from '../../assets/email.png'
import Busqueda from '../../assets/find.png'
import Horario from '../../assets/calendar.png'
import Fb from '../../assets/facebook.png'
import Ins from '../../assets/instagram.png'
import Manager from '../../assets/manager.png'

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home_main}>
        <div className={styles.content_description}>
          <p className={styles.home_title}>
            Descubre el placer de los sabores selectos en nuestra licorería
          </p>
          <p className={styles.home_description}>
            Donde cada copa es un brindis a la exquisitez y la buena compañía.
          </p>
        </div>
        <img className={styles.image} src={wine} alt="Fondo" />
      </div>
      <div className={styles.home_supply}>
        <div className={styles.home_category_content}>
          <div className={styles.content_info}>
            <p className={styles.tittle_content}>Nuestras Categorías</p>
            <p className={styles.description_content}>Más vendidas</p>
          </div>
          <div className={styles.categories_list}>
            <img className={styles.category_img_item} src={item1} alt="Item" />
            <img className={styles.category_img_item} src={item1} alt="Item" />
            <img className={styles.category_img_item} src={item1} alt="Item" />
          </div>
        </div>
        <div className={styles.home_product_content}>
          <div className={styles.content_info}>
            <p className={styles.tittle_content}>Nuestros Productos</p>
            <p className={styles.description_content}>Más vendidos</p>
          </div>
          <div className={styles.product_list}>
            { }
            <div className={styles.item_product}>
              <img className={styles.product_img} src={product1} alt="product1" />
              <div className={styles.content_product_info}>
                <p className={styles.product_info_name}>
                  Vino semiseco Viña d' LOS CampoS (BORGOÑA BLANCA)
                </p>
                <p className={styles.product_info_ml}>750 ML</p>
                <div className={styles.product_option}>
                  <div className={styles.product_item_cost}>
                    <p className={styles.product_cost_text}>Precio:</p>
                    <p className={styles.product_cost_num}>S/ 20.00</p>
                  </div>
                  <div className={styles.btn_add}>
                    <svg
                      className={styles.svg_add}
                      height="70%"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
                        fill="#ffffff"
                        className={styles["fill-000000"]}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            { }
            <div className={styles.item_product}>
              <img className={styles.product_img} src={product1} alt="product1" />
              <div className={styles.content_product_info}>
                <p className={styles.product_info_name}>
                  Vino semiseco Viña d' LOS CampoS (BORGOÑA BLANCA)
                </p>
                <p className={styles.product_info_ml}>750 ML</p>
                <div className={styles.product_option}>
                  <div className={styles.product_item_cost}>
                    <p className={styles.product_cost_text}>Precio:</p>
                    <p className={styles.product_cost_num}>S/ 20.00</p>
                  </div>
                  <div className={styles.btn_add}>
                    <svg
                      className={styles.svg_add}
                      height="70%"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
                        fill="#ffffff"
                        className={styles["fill-000000"]}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            { }

            <div className={styles.item_product}>
              <img className={styles.product_img} src={product1} alt="product1" />
              <div className={styles.content_product_info}>
                <p className={styles.product_info_name}>
                  Vino semiseco Viña d' LOS CampoS (BORGOÑA BLANCA)
                </p>
                <p className={styles.product_info_ml}>750 ML</p>
                <div className={styles.product_option}>
                  <div className={styles.product_item_cost}>
                    <p className={styles.product_cost_text}>Precio:</p>
                    <p className={styles.product_cost_num}>S/ 20.00</p>
                  </div>
                  <div className={styles.btn_add}>
                    <svg
                      className={styles.svg_add}
                      height="70%"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
                        fill="#ffffff"
                        className={styles["fill-000000"]}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            { }
            <img className={styles.licor_img} src={licorLogo} alt="licoreria_leon" />
          </div>
          <button className={styles.btn_product}>Ver productos</button>
        </div>
      </div>
      <div className={styles.contenedor_3}>
        <div className={styles.texto_1}>
          <h2> Sobre Nosotros</h2>
          <p>En nuestra tienda de licorería, nos apasiona brindar experiencias únicas y memorables a nuestros clientes. Desde nuestros modestos comienzos como una pequeña tienda familiar, hemos crecido hasta convertirnos en un destino imprescindible para los amantes de las bebidas de calidad</p>
        </div>
        <div className={styles.boton2}>
          <a href="#" class="">Ver productos</a>
        </div>

        <div className={styles.lugares}>
          <div className={styles.general}>
            <div className={styles.contenido}>
              <img className={styles.mood} src={Direccion} alt='' />
              <h3>Dirección</h3>
            </div>
            <div className={styles.tex}>
              <p> D2 Lote 80 - Calle Agru Santa Cruzp</p>
              <br></br>
              <p>Lima - Punta Hermosa</p>
            </div>
          </div>


          <div className={styles.general}>
            <div className={styles.contenido}>
              <img className={styles.mood} src={Tlf} alt=''>
              </img>
              <h3>Teléfonos</h3>
            </div>
            <div className={styles.tex}>
              <p>+51 123456789</p>
              <br></br>
              <p>+51 123456789</p>
              <br></br>
              <p>+51 123456789</p>
            </div>
          </div>

          <div className={styles.general}>
            <div className={styles.contenido}>
              <img className={styles.mood} src={Email} alt=''>
              </img>
              <h3>Correo Electrónico</h3>
            </div>
            <div className={styles.tex}>
              <p>licorerialeon2022@gmail.com</p>
              <br></br>
              <p>licorerialeon2022@gmail.com</p>
            </div>
          </div>

          <div className={styles.general2}>
            <div className={styles.contenido}>
              <img className={styles.mood} src={Horario} alt=''>
              </img>
              <h3>Horario de Atención</h3>
            </div>
            <div className={styles.tex}>
              <p>Lunes - Sábado:</p>
              <br></br>
              <p>9:30 am - 10:00 pm</p>
            </div>

          </div>
          <div className={styles.general3}>
            <div className={styles.contenido}>
              <img className={styles.mood} src={Busqueda} alt=''>
              </img>
              <h3>Siguenos en: </h3>
            </div>

            <div className={styles.redes}>
              <div className={styles.fb}>
                <img className={styles.img2} src={Fb} alt=''></img>

                <p className={styles.mov}>Licorería “León”</p>
              </div>
              <div className={styles.ins}>
                <img className={styles.img2} src={Ins} alt=''></img>
                <p className={styles.mov}>@Licorería “León”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contenedor_4}>
        <div className={styles.formulario}>
          <h2>Contáctanos</h2>
          <form className={styles.form}>
            <label for='name'>Nombres</label>
            <input type="text" name='name' id='name' />

            <label for='email'>Email</label>
            <input type="email" name='email' id='email' />

            <label for='number'>Teléfono</label>
            <input type="number" name='' id='' />

            <label for='coments'>Mensaje</label>
            <textarea name='coments' id='coments' cols='30' rows='5'>
            </textarea>

            <input className={styles.btn} type='submit' value='Enviar' />
          </form>
        </div>
        <div className={styles.her}>
          <p className={styles.frase}>“Como capitán de esta nave de sabores premium, te invito a un viaje personalizado en busca del licor perfecto para tus momentos especiales. ¡Únete a nosotros y brindemos por los placeres de la vida!"</p>
          <div className={styles.gerente}>
            <img className={styles.gerente_img} src={Manager} alt=''></img>
            <p className={styles.mov}>Rodriguez - Gerente General</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.div_1}>
          <div className={styles.texto_fo}>
            <p>Local</p>
            <h3>Licorería <br></br>"León"</h3>
          </div>

          <div className={styles.end}>
            <div className={styles.desc}>
              <a href="#" class="">Contáctanos</a>
              <a href="#" class="">categoría</a>
              <a href="#" class="">Sobre Nosotros</a>
            </div>

            <div className={styles.desc}>
              <a href="#" class="">Productos</a>
              <a href="#" class="">Inicio</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;
