import Header from "../../components/Header";
import Next from "../../assets/icon-next.svg";
import Product from "../../assets/Wine.png";
import styles from "../../styles/Pedido.module.css";
import { useState } from "react";

function Pedido_Complete() {

  const [showModalProduct, setShowModalProduct] = useState(false);

  return (
    <div className={styles.content_boss_pedido}>
      <Header />
      <div className={styles.content_main_pedido_logeado}>
        <div className={styles.content_login_pedido_logeado}>
          <div className={`${styles.content_text} ${styles.logeado}`}>
            <p className={styles.title_pedido_logeado}>Pedidos</p>
            <p className={styles.description_pedido}>
              Pedidos completados y pendientes, cancela en cualquier momento o
              pidelo de nuevo.
            </p>
          </div>
          <div className={styles.content_buton_Pedido}>
            <button className={`${styles.btn_Activo} ${styles.btnNoselect}`}>Activos</button>
            <button className={`${styles.btn_Completado} ${styles.btnSelect}`}>Completados</button>
          </div>
        </div>

        <div className={styles.content_listado_pedidos}>
          { }
          <div
            className={styles.content_unidad_pedido}
            onClick={() => setShowModalProduct(true)}
          >
            <div className={styles.pedido_description}>
              <p className={styles.description_title}>Código de Pedido N° 1</p>
              <div className={styles.description_base}>
                <p className={styles.base}>Productos:</p>
                <p className={styles.text_content_pedido}>5</p>
              </div>
              <div className={styles.description_base}>
                <p className={styles.base}>Precio Total:</p>
                <p className={styles.text_content_pedido}>S/.180</p>
              </div>
            </div>
            <div className={styles.pedido_btn}>
              <button className={styles.Pedir}>
                <p className={styles.btn_total}>S/.540</p>
                Pedir de Nuevo
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
          { }
          <div
            className={styles.content_unidad_pedido}
            onClick={() => setShowModalProduct(true)}
          >
            <div className={styles.pedido_description}>
              <p className={styles.description_title}>Código de Pedido N° 1</p>
              <div className={styles.description_base}>
                <p className={styles.base}>Productos:</p>
                <p className={styles.text_content_pedido}>5</p>
              </div>
              <div className={styles.description_base}>
                <p className={styles.base}>Precio Total:</p>
                <p className={styles.text_content_pedido}>S/.180</p>
              </div>
            </div>
            <div className={styles.pedido_btn}>
              <button className={styles.Pedir}>
                <p className={styles.btn_total}>S/.540</p>
                Pedir de Nuevo
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
          { }
          <div
            className={styles.content_unidad_pedido}
            onClick={() => setShowModalProduct(true)}
          >
            <div className={styles.pedido_description}>
              <p className={styles.description_title}>Código de Pedido N° 1</p>
              <div className={styles.description_base}>
                <p className={styles.base}>Productos:</p>
                <p className={styles.text_content_pedido}>5</p>
              </div>
              <div className={styles.description_base}>
                <p className={styles.base}>Precio Total:</p>
                <p className={styles.text_content_pedido}>S/.180</p>
              </div>
            </div>
            <div className={styles.pedido_btn}>
              <button className={styles.Pedir}>
                <p className={styles.btn_total}>S/.540</p>
                Pedir de Nuevo
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
          { }
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
              <p className={styles.title_modal_pedido}>Detalle pedido</p>
              <p className={styles.title2_modal_pedido}>Código de Pedido N° 1</p>
              <p className={styles.description_modal_pedido}>
                Pedidos completados y pendientes, cancela en cualquier momento o
                pidelo de nuevo.
              </p>
            </div>
            <div className={styles.separacion_modal}></div>

            <div className={styles.content_list_product}>
              { }
              <div className={styles.content_unidad_product}>
                <div className={styles.content_product_main}>
                  <div className={styles.product_description_img}>
                    <img src={Product} alt="" />
                  </div>
                  <div className={styles.product_description_main}>
                    <p className={styles.product_description_title}>
                      Vino semiseco (QUEIROLO)
                    </p>
                    <div className={styles.product_description_base}>
                      <p className={styles.product_base}>Descripción:</p>
                      <p className={styles.product_text_content_pedido}>750 ml</p>
                    </div>
                    <div className={styles.product_description_base}>
                      <p className={styles.product_base}>Cantidad:</p>
                      <p className={styles.product_text_content_pedido}>5</p>
                    </div>
                  </div>
                </div>
                <div className={styles.product_price}>
                  <p>S/.180</p>
                </div>
              </div>
              { }
              <div className={styles.content_unidad_product}>
                <div className={styles.content_product_main}>
                  <div className={styles.product_description_img}>
                    <img src={Product} alt="" />
                  </div>
                  <div className={styles.product_description_main}>
                    <p className={styles.product_description_title}>
                      Vino semiseco (QUEIROLO)
                    </p>
                    <div className={styles.product_description_base}>
                      <p className={styles.product_base}>Descripción:</p>
                      <p className={styles.product_text_content_pedido}>750 ml</p>
                    </div>
                    <div className={styles.product_description_base}>
                      <p className={styles.product_base}>Cantidad:</p>
                      <p className={styles.product_text_content_pedido}>5</p>
                    </div>
                  </div>
                </div>
                <div className={styles.product_price}>
                  <p>S/.180</p>
                </div>
              </div>
              { }
            </div>

            <div className={styles.content_button}>
              <div className={styles.pedido_btn}>
                <button className={styles.Pedir}>
                  <p className={styles.btn_total}>S/.540</p>
                  Pedir de Nuevo
                  <span className={styles.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pedido_Complete;
