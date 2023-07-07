import Next from "../../assets/icon-next.svg";
import Header from "../../components/Header";
import Product from "../../assets/Wine.png";
import Delete from "../../assets/IconDelete.svg";
import { Link } from "react-router-dom";

import O1 from "../../assets/mastercard.png";
import O2 from "../../assets/visa.png";
import O3 from "../../assets/dinners.png";
import O4 from "../../assets/plin.png";

import styles from "../../styles/Carrito.module.css";
import styles2 from "../../styles/Pedido.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Carrito() {
  const navigate = useNavigate();
  const { CrearOrder } = useAuth();
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState("");

  const [logeado, setLogeado] = useState(false);
  const [sinlogear, setSinlogear] = useState(false);
  const [showModalLogeo, setShowModalLogeo] = useState(false);

  useEffect(() => {
    const card = localStorage.getItem("cart");
    const user = localStorage.getItem("user");

    if (card) {
      const Card = JSON.parse(card);
      //Subtotal
      const subtotales = Card.map((card) => card.price * card.quantity);
      const total = subtotales.reduce(
        (acumulador, subtotal) => acumulador + subtotal,
        0
      );
      setCarrito(Card);
      setTotal(total);
    }
    if (user != null) {
      //Usuario Logeado
      setLogeado(true);
    } else {
      //Usuario SIN Logear
      setSinlogear(true);
    }
  }, []);

  const handleDeleteProduct = (idProduct) => {
    const productIndex = carrito.findIndex((item) => item.id === idProduct);

    if (productIndex !== -1) {
      const updatedCarrito = [...carrito];
      // Eliminar el producto del localstorage
      updatedCarrito.splice(productIndex, 1);
      setCarrito(updatedCarrito);
      localStorage.setItem("cart", JSON.stringify(updatedCarrito)); // Guardar el carrito actualizado en el LocalStorage

      const card = localStorage.getItem("cart");
      if (card) {
        const Card = JSON.parse(card);
        //Actualizar Subtotal
        const subtotales = Card.map((card) => card.price * card.quantity);
        const total = subtotales.reduce(
          (acumulador, subtotal) => acumulador + subtotal,
          0
        );

        setTotal(total);
      }
    } else {
      console.log("El producto no existe en el carrito.");
    }
  };

  const handleCreateOrder = async (event) => {
    event.preventDefault();
    // event.preventDefault();
    const user = localStorage.getItem("user");
    const card = localStorage.getItem("cart");

    if (card) {
      const Card = JSON.parse(card);
      const userData = JSON.parse(user);

      //Fecha actual
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const FechaActual = `${year}-${month}-${day}`;

      //INTERACCION POR CADA PRODUCTO
      for (let i = 0; i < Card.length; i++) {
        const { price, quantity, id } = Card[i];

        // Crear el pedido para cada producto
        const order = {
          subtotal: price,
          total: price * quantity,
          purchase_date: FechaActual,
          state_id: 1,
          user_id: userData.user.id,
          quantity: quantity,
          product_id: id,
        };

        try {
          const response = await CrearOrder(order);
          console.log("Pedido creado:", response);
          navigate("/");
        } catch (error) {
          console.log("Error al crear el pedido:", error);
        }
      }
      localStorage.removeItem("cart");
    }
  };

  return (
    <>
      <Header />
      <div className={styles.content_carrito}>
        <div className={styles.content_lista}>
          {/* LISTADO DE Carrito */}
          {carrito.map((card) => (
            <div className={styles2.content_unidad_product} key={card.id}>
              <div className={styles2.content_product_main}>
                <div className={styles2.product_description_img}>
                  <img src={card.url} alt="" />
                </div>
                <div className={styles2.product_description_main}>
                  <p className={styles2.product_description_title}>
                    {card.name}
                  </p>
                  <div className={styles2.product_description_base}>
                    <p className={styles2.product_base}>Descripción:</p>
                    <p className={styles2.product_text_content_pedido}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.content_cantidad}>
                <input
                  className={`${styles.cantidad_input} ${styles.input_carrito}`}
                  type="number"
                  defaultValue={card.quantity}
                />
              </div>
              <div className={styles.product_price}>
                <p>{card.price * card.quantity}</p>
              </div>
              <div className={styles.delete_btn}>
                <button
                  className={styles.Delete}
                  onClick={() => handleDeleteProduct(card.id)}
                >
                  <img src={Delete} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.detalle_tarjeta}>
          <div className={styles.tajeta_main}>
            <div className={styles.titulo_card}>
              <p className={styles.title_card}>Detalle de tarjeta</p>
            </div>

            <form
              onSubmit={handleCreateOrder}
              className={styles.content_form_carrito}
            >
              <div className={styles.content_tipo_tarjeta}>
                <p className={styles.title}>Tipo de tarjeta</p>
                <div className={styles.content_tarjeta_img}>
                  <div>
                    <img className={styles.img_target_1} src={O1} />
                  </div>
                  <div>
                    <img className={styles.img_target_2} src={O2} />
                  </div>
                  <div>
                    <img className={styles.img_target_3} src={O3} />
                  </div>
                  <div>
                    <img className={styles.img_target_4} src={O4} />
                  </div>
                </div>
              </div>
              <div className={styles.content_nombre_tarjeta}>
                <p className={styles.title}>Nombre del propietario</p>
                <input
                  className={`${styles.nombre_tarjeta} ${styles.input_carrito}`}
                  type="text"
                  placeholder="Nombre del propietario"
                  required
                />
                <p className={styles.title}>Número de tarjeta</p>
                <input
                  className={`${styles.nombre_tarjeta} ${styles.input_carrito}`}
                  type="number"
                  placeholder="1111 2222 3333 4444"
                  required
                />
              </div>

              <div className={styles.content_fecha}>
                <div className={styles.fecha_input}>
                  <p className={styles.title}>Fecha de caducidad</p>
                  <input
                    className={`${styles.fecha_input_targeta} ${styles.input_carrito}`}
                    type="date"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div className={styles.fecha_input}>
                  <p className={styles.title}>CVV</p>
                  <input
                    className={`${styles.fecha_input_targeta} ${styles.input_carrito}`}
                    type="number"
                    placeholder="CVV"
                    required
                    maxLength="3"
                  />
                </div>
              </div>

              <div className={styles.content_detalle}>
                <div className={styles.detalle_carrito}>
                  <p>SubTotal</p>
                  <p>{total}</p>
                </div>
                <div className={styles.detalle_carrito}>
                  <p>Delivery</p>
                  <p>S/.5</p>
                </div>
                <div className={styles.detalle_carrito}>
                  <p>Total</p>
                  <p>S/.{total + 5}</p>
                </div>
              </div>
              <div className={styles2.pedido_btn}>
                {logeado && (
                  <button className={styles2.Pedir} type="submit">
                    <p className={styles2.btn_total}>S/.{total + 5}</p>
                    Pagar Ahora
                    <span className={styles2.icon}>
                      <img src={Next} />
                    </span>
                  </button>
                )}
                {/* Button sin logear */}
                {sinlogear && (
                  <button
                    className={styles2.Pedir}
                    onClick={() => setShowModalLogeo(true)}
                  >
                    <p className={styles2.btn_total}>S/.{total + 5}</p>
                    Pagar Ahora
                    <span className={styles2.icon}>
                      <img src={Next} />
                    </span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModalLogeo && (
        <div className={styles.modal_principal}>
          <div
            className={styles.modal_pedido_main}
            onClick={() => setShowModalLogeo(false)}
          ></div>
          <div className={styles.content_login_pedido}>
            <div className={styles.content_text}>
              <p className={styles.title_pedido}>Inicia Sesión</p>
              <p className={styles.description_pedido}>
                Iniciar sesión o registrate para realizar tu compra. ¡Te
                esperamos!
              </p>
            </div>
            <div className={styles.separacion}></div>
            <div className={styles2.content_button}>
              <Link to="/login">
                <button className={styles.inicia_sesion}>
                  Iniciar Sesión
                  <span className={styles.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </Link>

              <Link to="/register">
                <button className={styles.registrar}>
                  Registrar
                  <span className={styles.icon}>
                    <img src={Next} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Carrito;
