import Header from "../../components/Header";
import wine from "../../assets/ImgWine.png";
import item1 from "../../assets/Category1.png";
import product1 from "../../assets/Wine.png";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

function Product() {
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [count, setCount] = useState(1);

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
        <div
          className={styles.modal}
          onClick={() => setShowModalProduct(false)}
        >
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal_head}>
              <p className={styles.modal_description_title}>Detalle Producto</p>
              <p className={styles.modal_description_id}>
                Código de Producto N° 1
              </p>
              <p className={styles.modal_description}>
                Agrega productos al carrito para poder comprarlos y selecciona
                la cantidad deseada.
              </p>
            </div>
            <div className={styles.modal_detail_product}>
              <img
                className={styles.modal_product_img}
                src={product1}
                alt="Wine"
              />
              <div className={styles.modal_product_container}>
                <div className={styles.modal_product_info}>
                  <p className={styles.modal_product_name}>
                    Vino semiseco (QUEIROLO)
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <td className={styles.modal_description_td}>
                          Detalle:
                        </td>
                        <td className={styles.modal_description_td}>
                          Precio unitario:
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={styles.modal_description_tbody}>75mL</td>
                        <td className={styles.modal_description_tbody}>
                          S/ 20.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.modal_product_quantity}>
                  <button
                    className={styles.btn_event}
                    onClick={() => {
                      if (count > 1) {
                        setCount((prevCount) => prevCount - 1);
                      }
                    }}
                  >
                    <svg
                      strokeWidth="1.9"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12h12"
                        stroke="#FFFFFF"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <p className={styles.product_quantity}>{count}</p>
                  <button
                    className={styles.btn_event}
                    onClick={() => setCount((count) => count + 1)}
                  >
                    <svg
                      strokeWidth="1.9"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                        stroke="#FFFFFF"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.modal_cart_option}>
              <p className={styles.product_price_cart}>S/ {count * 20}.00</p>
              <button className={styles.btn_event_add}>
                <div className={styles.btn_cart}>
                  <p className={styles.txt_add_cart}>Agregar al carrito</p>
                  <svg
                    className={styles.btn_add_cart}
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="#000000"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
