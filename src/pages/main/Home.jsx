import Header from "../../components/Header_Logeado";
import wine from "../../assets/ImgWine.png";
import styles from "../../styles/Home.module.css";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

import Direccion from "../../assets/location-pin.png";
import Tlf from "../../assets/phone-call.png";
import Email from "../../assets/email.png";
import Busqueda from "../../assets/find.png";
import Horario from "../../assets/calendar.png";
import Fb from "../../assets/facebook.png";
import Ins from "../../assets/instagram.png";
import Manager from "../../assets/manager.png";
import useFetch from "../../hooks/useFetch.JSX";

function Home() {
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [count, setCount] = useState(1);
  const [modalCount, setModalCount] = useState(false);
  const { getCategoryList, getProductByBranch, getDetailProduct } = useFetch();
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productData, setProductData] = useState(null);
  const { state } = useContext(StoreContext);

  const handleCategoryList = async () => {
    try {
      const data = await getCategoryList();
      setCategoryList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductListByBranch = async () => {
    try {
      const data = await getProductByBranch(state.selectedBranchId);
      setProductList(data);
      // Eliminar el arreglo de productos del localStorage al cambiar de sucursal
      // localStorage.removeItem("cart"); 
      // [CORREGIR Linea 43] - EL ARREGLO SE ELIMINA AUTOMATIVAMENTE AL IR A HOME
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailProduct = async (productId) => {
    try {
      const data = await getDetailProduct(productId);
      setProductData(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (selectedProduct) => {
    // Obtener el carrito actual del localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cartItems.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingProduct) {
      // Si el producto existe, incrementar la cantidad
      if (existingProduct.quantity + modalCount <= selectedProduct.stock) {
        existingProduct.quantity += modalCount;
      } else {
        // Mostrar mensaje de error o realizar alguna acción adecuada cuando se excede el stock
        console.log("No se puede agregar más del stock máximo");
        return; // Salir de la función sin actualizar el carrito
      }
    } else {
      const productToAdd = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity:
          modalCount <= selectedProduct.stock
            ? modalCount
            : selectedProduct.stock,
        url: selectedProduct.url,
        description: selectedProduct.description,
      };

      cartItems.push(productToAdd);
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Cerrar el modal y reiniciar el contador
    setShowModalProduct(false);
    setModalCount(1);
  };

  const getCartItemCount = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cartItems.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };

  useEffect(() => {
    handleCategoryList();
  }, []);

  useEffect(() => {
    handleProductListByBranch();
  }, [state.selectedBranchId]);

  return (
    <>
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
              {categoryList.slice(0, 3).map((category) => (
                <img
                  key={category.id}
                  className={styles.category_img_item}
                  src={category.url}
                  alt={category.name}
                />
              ))}
            </div>
          </div>
          <div className={styles.home_product_content}>
            <div className={styles.content_info}>
              <p className={styles.tittle_content}>Nuestros Productos</p>
              <p className={styles.description_content}>Más vendidos</p>
            </div>
            <div className={styles.product_list}>
              {productList.slice(0, 3).map((product) => (
                <div
                  className={styles.category_item_select}
                  onClick={() => {
                    setShowModalProduct(true);
                    handleDetailProduct(product.id);
                  }}
                  key={product.id}
                >
                  <div className={styles.item_product}>
                    <img
                      className={styles.product_img}
                      src={product.url}
                      alt={product.name}
                    />
                    <div className={styles.content_product_info}>
                      <p className={styles.product_info_name}>{product.name}</p>
                      <p className={styles.product_info_ml}>
                        {product.description}
                      </p>
                      <div className={styles.product_option}>
                        <div className={styles.product_item_cost}>
                          <p className={styles.product_cost_text}>Precio:</p>
                          <p className={styles.product_cost_num}>
                            S/ {product.price}
                          </p>
                        </div>
                        <button
                          className={styles.btn_add}
                          onClick={(e) => {
                            e.stopPropagation();
                            const newCount = count;
                            if (newCount <= product.stock) {
                              addToCart(product);
                              setCount(newCount);
                            } else {
                              console.log(
                                "No se puede agregar más del stock máximo"
                              );
                            }
                          }}
                        >
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/products">
              <button className={styles.btn_product}>Ver productos</button>
            </Link>
          </div>
        </div>
        <div className={styles.contenedor_3}>
          <div className={styles.texto_1}>
            <h2> Sobre Nosotros</h2>
            <p>
              En nuestra tienda de licorería, nos apasiona brindar experiencias
              únicas y memorables a nuestros clientes. Desde nuestros modestos
              comienzos como una pequeña tienda familiar, hemos crecido hasta
              convertirnos en un destino imprescindible para los amantes de las
              bebidas de calidad
            </p>
          </div>
          <div className={styles.boton2}>
            <a href="#" className="">
              Ver productos
            </a>
          </div>

          <div className={styles.lugares}>
            <div className={styles.general}>
              <div className={styles.contenido}>
                <img className={styles.mood} src={Direccion} alt="" />
                <h4>Dirección</h4>
              </div>
              <div className={styles.tex}>
                <p> D2 Lote 80 - Calle Agru Santa Cruzp</p>
                <br></br>
                <p>Lima - Punta Hermosa</p>
              </div>
            </div>

            <div className={styles.general}>
              <div className={styles.contenido}>
                <img className={styles.mood} src={Tlf} alt="" />
                <h4>Teléfonos</h4>
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
                <img className={styles.mood} src={Email} alt="" />
                <h4>Correo Electrónico</h4>
              </div>
              <div className={styles.tex}>
                <p>licorerialeon2022@gmail.com</p>
                <br></br>
                <p>licorerialeon2022@gmail.com</p>
              </div>
            </div>

            <div className={styles.general2}>
              <div className={styles.contenido}>
                <img className={styles.mood} src={Horario} alt="" />
                <h4>Horario de Atención</h4>
              </div>
              <div className={styles.tex}>
                <p>Lunes - Sábado:</p>
                <br></br>
                <p>9:30 am - 10:00 pm</p>
              </div>
            </div>
            <div className={styles.general3}>
              <div className={styles.contenido}>
                <img className={styles.mood} src={Busqueda} alt="" />
                <h4>Siguenos en: </h4>
              </div>

              <div className={styles.redes}>
                <div className={styles.fb}>
                  <img className={styles.img2} src={Fb} alt="" />

                  <p className={styles.mov}>Licorería “León”</p>
                </div>
                <div className={styles.ins}>
                  <img className={styles.img2} src={Ins} alt="" />
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
              <label className={styles.label_home} htmlFor="name">Nombres</label>
              <input className={styles.input_home} type="text" name="name" id="name" />

              <label className={styles.label_home} htmlFor="email">Email</label>
              <input className={styles.input_home} type="email" name="email" id="email" />

              <label className={styles.label_home} htmlFor="number">Teléfono</label>
              <input className={styles.input_home} type="number" name="" id="" />

              <label className={styles.label_home} htmlFor="coments">Mensaje</label>
              <textarea
                className={styles.input_home}
                name="coments"
                id="coments"
                cols="30"
                rows="5"
              ></textarea>

              <input className={styles.btn} type="submit" value="Enviar" />
            </form>
          </div>
          <div className={styles.her}>
            <p className={styles.frase}>
              “Como capitán de esta nave de sabores premium, te invito a un
              viaje personalizado en busca del licor perfecto para tus momentos
              especiales. ¡Únete a nosotros y brindemos por los placeres de la
              vida!"
            </p>
            <div className={styles.gerente}>
              <img className={styles.gerente_img} src={Manager} alt="" />
              <p className={styles.mov}>Rodriguez - Gerente General</p>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.div_1}>
            <div className={styles.texto_fo}>
              <p>Local:</p>
              <h3>
                Licorería <br></br>"León"
              </h3>
            </div>

            <div className={styles.end}>
              <div className={styles.desc}>
                <a href="#" className="">
                  Contáctanos
                </a>
                <a href="#" className="">
                  Sobre Nosotros
                </a>
                <a href="#" className="">
                  categoría
                </a>
              </div>

              <div className={styles.desc}>
                <a href="#" className="">
                  Productos
                </a>
                <a href="#" className="">
                  Inicio
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {showModalProduct && productData && (
        <div
          className={styles.modal}
          onClick={() => {
            setShowModalProduct(false);
          }}
        >
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal_head}>
              <p className={styles.modal_description_title}>Detalle Producto</p>
              <p className={styles.modal_description_id}>{productData.id}</p>
              <p className={styles.modal_description}>
                Agrega productos al carrito para poder comprarlos y selecciona
                la cantidad deseada.
              </p>
            </div>
            <div className={styles.modal_detail_product}>
              <img
                className={styles.modal_product_img}
                src={productData.url}
                alt={productData.name}
              />
              <div className={styles.modal_product_container}>
                <div className={styles.modal_product_info}>
                  <p className={styles.modal_product_name}>
                    {productData.name}
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
                        <td className={styles.modal_description_tbody}>
                          {productData.description}
                        </td>
                        <td className={styles.modal_description_tbody}>
                          S/ {productData.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.modal_product_quantity}>
                  <button
                    className={styles.btn_event}
                    onClick={() => {
                      if (modalCount > 1) {
                        setModalCount((prevCount) => prevCount - 1);
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
                  <p className={styles.product_quantity}>{modalCount}</p>
                  <button
                    className={styles.btn_event}
                    onClick={() => {
                      if (
                        modalCount <
                        Math.min(
                          productData.stock,
                          productData.stock - getCartItemCount(productData.id)
                        )
                      ) {
                        setModalCount((prevCount) => prevCount + 1);
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
              <p className={styles.product_price_cart}>
                S/ {modalCount * productData.price}.00
              </p>
              <button
                className={styles.btn_event_add}
                onClick={() => addToCart(productData)}
              >
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

export default Home;
