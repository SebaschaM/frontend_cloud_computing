import Header from "../../components/Header";
import Next from "../../assets/icon-next.svg";
import Product from "../../assets/Wine.png";
// import { MostrarDiv, OcultarDiv } from "../js/pedido.js";
import styles from "../../styles/Pedido.module.css";

function Pedido_Complete() {
  return (
    <div className={styles["content_boss_pedido"]}>
      <Header />
      <div className="content_main_pedido_logeado">
        <div className="content_login_pedido_logeado">
          <div className="content_text logeado">
            <p className="title_pedido_logeado">Pedidos</p>
            <p className="description_pedido">
              Pedidos completados y pendientes, cancela en cualquier momento o
              pidelo de nuevo.
            </p>
          </div>
          <div className="content_buton_Pedido">
            <button className="btn_Activo btnNoselect">Activos</button>
            <button className="btn_Completado btnSelect">Completados</button>
          </div>
        </div>

        <div className="content_listado_pedidos">
          <div
            className="content_unidad_pedido"
            // onClick={MostrarDiv}
          >
            <div className="pedido_description">
              <p className="description_title">Código de Pedido N° 1</p>
              <div className="description_base">
                <p className="base">Productos:</p>
                <p className="text_content_pedido">5</p>
              </div>
              <div className="description_base">
                <p className="base">Precio Total:</p>
                <p className="text_content_pedido">S/.180</p>
              </div>
            </div>
            <div className="pedido_btn">
              <button className="Pedir">
                <p className="btn_total">S/.540</p>
                Pedir de Nuevo
                <span className="icon">
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>

          <div
            className="content_unidad_pedido"
            // onClick={MostrarDiv}
          >
            <div className="pedido_description">
              <p className="description_title">Código de Pedido N° 1</p>
              <div className="description_base">
                <p className="base">Productos:</p>
                <p className="text_content_pedido">5</p>
              </div>
              <div className="description_base">
                <p className="base">Precio Total:</p>
                <p className="text_content_pedido">S/.180</p>
              </div>
            </div>
            <div className="pedido_btn">
              <button className="Pedir">
                <p className="btn_total">S/.540</p>
                Pedir de Nuevo
                <span className="icon">
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>

          <div
            className="content_unidad_pedido"
            // onClick={MostrarDiv}
          >
            <div className="pedido_description">
              <p className="description_title">Código de Pedido N° 1</p>
              <div className="description_base">
                <p className="base">Productos:</p>
                <p className="text_content_pedido">5</p>
              </div>
              <div className="description_base">
                <p className="base">Precio Total:</p>
                <p className="text_content_pedido">S/.180</p>
              </div>
            </div>
            <div className="pedido_btn">
              <button className="Pedir">
                <p className="btn_total">S/.540</p>
                Pedir de Nuevo
                <span className="icon">
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal_pedido_main"
        // onClick={OcultarDiv}
      ></div>
      <div className="content_modal_pedido">
        <div className="content__modal_text">
          <p className="title_modal_pedido">Detalle pedido</p>
          <p className="title2_modal_pedido">Código de Pedido N° 1</p>
          <p className="description_modal_pedido">
            Pedidos completados y pendientes, cancela en cualquier momento o
            pidelo de nuevo.
          </p>
        </div>
        <div className="separacion_modal"></div>

        <div className="content_list_product">
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
            <div className="product_price">
              <p>S/.180</p>
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
            <div className="product_price">
              <p>S/.180</p>
            </div>
          </div>
        </div>
        <div className="content_button">
          <div className="pedido_btn">
            <button className="Pedir">
              <p className="btn_total">S/.540</p>
              Pedir de Nuevo
              <span className="icon">
                <img src={Next} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedido_Complete;
