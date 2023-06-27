import Header from "../../components/Header_Logeado";
import Next from "../../assets/icon-next.svg";
import Product from "../../assets/Wine.png";
import styles from "../../styles/Pedido.module.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.JSX";
const { getOrderList } = useFetch();

function Pedido_Activo() {

  const [showModalProduct, setShowModalProduct] = useState(false);
  const [ordeList, setOrdeList] = useState([]);
  const [idOrder, setIdOrder] = useState('')

  const handleOrderList = async () => {
    try {
      const data = await getOrderList("1");
      setOrdeList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailOrder = async (idOrder) => {
    try {
      setIdOrder(idOrder)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleOrderList();
  }, []);

  return (
    <div className={styles.content_boss_pedido_logeado}>
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

            <Link to="/pedidosActivo" className={styles.btn_Activo_Complete}>
              <button className={`${styles.btn_Activo} ${styles.btnSelect}`}>Activos</button>
            </Link>

            <Link to="/pedidosComplete" className={styles.btn_Activo_Complete}>
              <button className={`${styles.btn_Completado} ${styles.btnNoselect}`}>Completados</button>
            </Link>
          </div>
        </div>

        <div className={styles.content_listado_pedidos}>

          {/* LISTA DE ORDENES ACIVOS */}
          {ordeList
            .filter((order, index, self) => self.findIndex(o => o.order_id === order.order_id) === index)
            .filter(order => order.state_id === 1)
            .slice(0, 3)
            .map((order) => (
              <div
                className={styles.content_unidad_pedido}
                onClick={() => {
                  setShowModalProduct(true);
                  handleDetailOrder(order.order_id);
                }}
              >
                <div className={styles.pedido_description}>
                  <p className={styles.description_title}>Código de Pedido N° {order.order_id}</p>
                  <div className={styles.description_base}>
                    <p className={styles.base}>Productos:</p>
                    <p className={styles.text_content_pedido}>{order.quantity}</p>
                  </div>
                  <div className={styles.description_base}>
                    <p className={styles.base}>Precio Total:</p>
                    <p className={styles.text_content_pedido}>{order.total}</p>
                  </div>
                </div>
                <div className={styles.pedido_btn}>
                  <button className={styles.Cancelar}>
                    Cancelar Pedido
                    <span className={styles.icon}>
                      <img src={Next} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
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
              <p className={styles.title2_modal_pedido}>Código de Pedido N° {idOrder}</p>
              <p className={styles.description_modal_pedido}>
                Pedidos completados y pendientes, cancela en cualquier momento o
                pidelo de nuevo.
              </p>
            </div>
            <div className={styles.separacion_modal}></div>

            <div className={styles.content_list_product}>
              {/* LISTADO DE DETALLE ORDEN */}
              {ordeList
                .filter(order => order.order_id === idOrder)
                .slice(0, 3)
                .map((order) => (

                  <div className={styles.content_unidad_product}>
                    <div className={styles.content_product_main}>
                      <div className={styles.product_description_img}>
                        <img src={order.url} alt="" />
                      </div>
                      <div className={styles.product_description_main}>
                        <p className={styles.product_description_title}>
                          {order.name}
                        </p>
                        <div className={styles.product_description_base}>
                          <p className={styles.product_base}>Descripción:</p>
                          <p className={styles.product_text_content_pedido}>{order.description}</p>
                        </div>
                        <div className={styles.product_description_base}>
                          <p className={styles.product_base}>Cantidad:</p>
                          <p className={styles.product_text_content_pedido}>{order.quantity}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.product_price}>
                      <p>{order.subtotal}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className={styles.content_button}>
              <button className={styles.registrar}>
                Cancelar Pedido
                <span className={styles.icon}>
                  <img src={Next} />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Pedido_Activo;
