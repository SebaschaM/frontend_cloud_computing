import Header from "../../components/Header";
import wine from "../../assets/ImgWine.png";
import item1 from "../../assets/Category1.png";
import product1 from "../../assets/Wine.png";
import licorLogo from "../../assets/Licoreria-name.png";
import styles from "../../styles/Home.module.css";

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
            {}
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
            {}
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
            {}
            
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
            {}
            <img className={styles.licor_img} src={licorLogo} alt="licoreria_leon" />
          </div>
          <button className={styles.btn_product}>Ver productos</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
