import Header from "../../components/Header";
import wine from "../../assets/ImgWine.png";
import item1 from "../../assets/Category1.png";
import product1 from "../../assets/Wine.png";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

function Product() {
  const [showModalProduct, setShowModalProduct] = useState(false);

  return (
    <>
      <div className={styles.product}>
        <Header />
        <div className={styles.product_main}>
          <div className={styles.content_description}>
            <p className={styles.product_title}>PRODUCTOS</p>
            <p className={styles.product_description}>
              Donde cada copa es un brindis a la exquisitez y la buena compañía.
            </p>
          </div>
          <img className={styles.image} src={wine} alt="Fondo" />
        </div>

        <div className={styles.product_category}>
          <p className={styles.category_tittle}>Categorías</p>
          <div className={styles.category_main}>
            <img className={styles.img_wine} src={wine} alt="Wine" />
            <div className={styles.category_container}>
              <img className={styles.category_item} src={item1} alt="Item" />
              <img className={styles.category_item} src={item1} alt="Item" />
              <img className={styles.category_item} src={item1} alt="Item" />
            </div>
          </div>
          <div className={styles.category_list}>
            <div className={styles.category_item_detail}>
              <div className={styles.category_item_info}>
                <p className={styles.category_item_tittle}>Categorías</p>
                <p className={styles.category_item_description}>
                  VINOS SEMISECOS (viña d´los campos)
                </p>
              </div>
              <div className={styles.category_product_list}>
                <div
                  className={styles.category_item_select}
                  onClick={() => setShowModalProduct(true)}
                >
                  <div className={styles.category_item_product}>
                    <img
                      className={styles.product_img}
                      src={product1}
                      alt="product1"
                    />
                    <div className={styles.item_product_info}>
                      <p className={styles.product_name}>
                        Vino semiseco Viña d' LOS CampoS (BORGOÑA BLANCA)
                      </p>
                      <p className={styles.product_ml}>750 ML</p>
                      <div className={styles.item_product_option}>
                        <div className={styles.product_cost}>
                          <p className={styles.price_text}>Precio</p>
                          <p className={styles.product_price}>S/ 20.00</p>
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
                              className="fill-000000"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product_footer}>
          <div className={styles.footer_message}>
            <p className={styles.footer_text}>
              TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO ESTÁ PROHIBIDA LA
              VENTA DE ALCOHOL A MENORES DE 18 AÑOS
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModalProduct && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h1>Contenido </h1>
            <button onClick={() => setShowModalProduct(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
