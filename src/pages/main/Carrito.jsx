import Next from "../../assets/icon-next.svg";
import Header from "../../components/Header";
import Product from "../../assets/Wine.png";
import Delete from "../../assets/IconDelete.svg";
import styles from "../../styles/Carrito.module.css";

function Carrito() {
  return (
    <>
      <Header />
      <div className={styles["content_carrito"]}>
        <div className={styles["content_lista"]}>
          <div className="content_unidad_product">
            <div className="content_product_main">
              <div className="product_description_img">
                <img src={Product} alt="" />
              </div>
              <div className="product_description_main">
                <p className="product_description_title">
                  Vino semiseco (QUEIROLO)
                </p>
                <div className="product_description_base">
                  <p className="product_base">Descripción:</p>
                  <p className="product_text_content_pedido">750 ml</p>
                </div>
                <div className="product_description_base">
                  <p className="product_base">Cantidad:</p>
                  <p className="product_text_content_pedido">5</p>
                </div>
              </div>
            </div>
            <div className="content_cantidad">
              <input type="number" value="1" />
            </div>
            <div className="product_price">
              <p>S/.180</p>
            </div>
            <div className="delete_btn">
              <button className="Delete">
                <img src={Delete} />
              </button>
            </div>
          </div>

          <div className="content_unidad_product">
            <div className="content_product_main">
              <div className="product_description_img">
                <img src={Product} alt="" />
              </div>
              <div className="product_description_main">
                <p className="product_description_title">
                  Vino semiseco (QUEIROLO)
                </p>
                <div className="product_description_base">
                  <p className="product_base">Descripción:</p>
                  <p className="product_text_content_pedido">750 ml</p>
                </div>
                <div className="product_description_base">
                  <p className="product_base">Cantidad:</p>
                  <p className="product_text_content_pedido">5</p>
                </div>
              </div>
            </div>
            <div className="content_cantidad">
              <input type="number" value="1" />
            </div>
            <div className="product_price">
              <p>S/.180</p>
            </div>
            <div className="delete_btn">
              <button className="Delete">
                <img src={Delete} />
              </button>
            </div>
          </div>

          <div className="content_unidad_product">
            <div className="content_product_main">
              <div className="product_description_img">
                <img src={Product} alt="" />
              </div>
              <div className="product_description_main">
                <p className="product_description_title">
                  Vino semiseco (QUEIROLO)
                </p>
                <div className="product_description_base">
                  <p className="product_base">Descripción:</p>
                  <p className="product_text_content_pedido">750 ml</p>
                </div>
                <div className="product_description_base">
                  <p className="product_base">Cantidad:</p>
                  <p className="product_text_content_pedido">5</p>
                </div>
              </div>
            </div>
            <div className="content_cantidad">
              <input type="number" value="1" />
            </div>
            <div className="product_price">
              <p>S/.180</p>
            </div>
            <div className="delete_btn">
              <button className="Delete">
                <img src={Delete} />
              </button>
            </div>
          </div>
        </div>

        <div className="detalle_tarjeta">
          <div className="tajeta_main">
            <div className="titulo_card">
              <p className="title_card">Detalle de tarjeta</p>
            </div>

            <p className="title2_type">Tipo de tarjeta</p>
            <form onSubmit="" className="content_form_carrito">
              <div className="content_nombre_tarjeta">
                <p className="title3_name">Nombre del propietario</p>
                <input type="text" placeholder="Nombre del propietario"></input>
                <p className="title4_number">Número de tarjeta</p>
                <input type="text" placeholder="111111111111111"></input>
              </div>

              <div className="content_fecha">
                <div>
                  <p className="title5_date">Fecha de caducidad</p>
                  <input type="text" placeholder="MM/AA"></input>
                </div>
                <div>
                  <p className="title6_cvv">CVV</p>
                  <input type="text" placeholder="CVV"></input>
                </div>
              </div>
            </form>

            <div className="content_detalle">
              <div className="detalle_carrito">
                <p>SubTotal</p>
                <p>S/.150</p>
              </div>
              <div className="detalle_carrito">
                <p>Delivery</p>
                <p>S/.5</p>
              </div>
              <div className="detalle_carrito">
                <p>Total</p>
                <p>S/.155</p>
              </div>
            </div>
            <div className="pedido_btn">
              <button className="Pedir">
                <p className="btn_total">S/.5</p>
                Pagar Ahora
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrito;
