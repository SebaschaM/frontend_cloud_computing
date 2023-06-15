import Next from "../../assets/icon-next.svg";
import Header from "../../components/Header";
import Product from "../../assets/Wine.png";
import Delete from "../../assets/IconDelete.svg";

import O1 from "../../assets/mastercard.png";
import O2 from "../../assets/visa.png";
import O3 from "../../assets/dinners.png";
import O4 from "../../assets/plin.png";

import styles from "../../styles/Carrito.module.css";
import styles2 from "../../styles/Pedido.module.css";

function Carrito() {
  return (
    <>
      <Header />
      <div className={styles.content_carrito}>
        <div className={styles.content_lista}>
          { }
          <div className={styles2.content_unidad_product}>
            <div className={styles2.content_product_main}>
              <div className={styles2.product_description_img}>
                <img src={Product} alt="" />
              </div>
              <div className={styles2.product_description_main}>
                <p className={styles2.product_description_title}>
                  Vino semiseco (QUEIROLO)
                </p>
                <div className={styles2.product_description_base}>
                  <p className={styles2.product_base}>Descripción:</p>
                  <p className={styles2.product_text_content_pedido}>750 ml</p>
                </div>
              </div>
            </div>
            <div className={styles.content_cantidad}>
              <input type="number" value="1" />
            </div>
            <div className={styles.product_price}>
              <p>S/.180</p>
            </div>
            <div className={styles.delete_btn}>
              <button className={styles.Delete}>
                <img src={Delete} />
              </button>
            </div>
          </div>
          { }
          <div className={styles2.content_unidad_product}>
            <div className={styles2.content_product_main}>
              <div className={styles2.product_description_img}>
                <img src={Product} alt="" />
              </div>
              <div className={styles2.product_description_main}>
                <p className={styles2.product_description_title}>
                  Vino semiseco (QUEIROLO)
                </p>
                <div className={styles2.product_description_base}>
                  <p className={styles2.product_base}>Descripción:</p>
                  <p className={styles2.product_text_content_pedido}>750 ml</p>
                </div>
              </div>
            </div>
            <div className={styles.content_cantidad}>
              <input type="number" value="1" />
            </div>
            <div className={styles.product_price}>
              <p>S/.180</p>
            </div>
            <div className={styles.delete_btn}>
              <button className={styles.Delete}>
                <img src={Delete} />
              </button>
            </div>
          </div>
          { }
          <div className={styles2.content_unidad_product}>
            <div className={styles2.content_product_main}>
              <div className={styles2.product_description_img}>
                <img src={Product} alt="" />
              </div>
              <div className={styles2.product_description_main}>
                <p className={styles2.product_description_title}>
                  Vino semiseco (QUEIROLO)
                </p>
                <div className={styles2.product_description_base}>
                  <p className={styles2.product_base}>Descripción:</p>
                  <p className={styles2.product_text_content_pedido}>750 ml</p>
                </div>
              </div>
            </div>
            <div className={styles.content_cantidad}>
              <input type="number" value="1" />
            </div>
            <div className={styles.product_price}>
              <p>S/.180</p>
            </div>
            <div className={styles.delete_btn}>
              <button className={styles.Delete}>
                <img src={Delete} />
              </button>
            </div>
          </div>
          { }
        </div>

        <div className={styles.detalle_tarjeta}>
          <div className={styles.tajeta_main}>
            <div className={styles.titulo_card}>
              <p className={styles.title_card}>Detalle de tarjeta</p>
            </div>

            <form onSubmit="" className={styles.content_form_carrito}>
              <div className={styles.content_tipo_tarjeta}>
                <p className={styles.title}>Tipo de tarjeta</p>
                <div className={styles.content_tarjeta_img}>
                  <div>
                    <img className={styles.img_target_1} src={O1} /></div>
                  <div>
                    <img className={styles.img_target_2} src={O2} /></div>
                  <div>
                    <img className={styles.img_target_3} src={O3} /></div>
                  <div>
                    <img className={styles.img_target_4} src={O4} /></div>
                </div>
              </div>
              <div className={styles.content_nombre_tarjeta}>
                <p className={styles.title}>Nombre del propietario</p>
                <input type="text" placeholder="Nombre del propietario"></input>
                <p className={styles.title}>Número de tarjeta</p>
                <input type="text" placeholder="1111 2222 3333 4444"></input>
              </div>

              <div className={styles.content_fecha}>
                <div className={styles.fecha_input}>
                  <p className={styles.title}>Fecha de caducidad</p>
                  <input type="date" placeholder="MM/AA"></input>
                </div>
                <div className={styles.fecha_input}>
                  <p className={styles.title}>CVV</p>
                  <input type="text" placeholder="CVV"></input>
                </div>
              </div>

              <div className={styles.content_detalle}>
                <div className={styles.detalle_carrito}>
                  <p>SubTotal</p>
                  <p>S/.150</p>
                </div>
                <div className={styles.detalle_carrito}>
                  <p>Delivery</p>
                  <p>S/.5</p>
                </div>
                <div className={styles.detalle_carrito}>
                  <p>Total</p>
                  <p>S/.155</p>
                </div>
              </div>
              <div className={styles2.pedido_btn}>
                <button className={styles2.Pedir}>
                  <p className={styles2.btn_total}>S/.5</p>
                  Pagar Ahora
                  <span className={styles2.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carrito;