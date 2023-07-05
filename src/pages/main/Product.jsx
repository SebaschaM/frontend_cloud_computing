import Header from "../../components/Header_Logeado";
import wine from "../../assets/ImgWine.png";
import { useEffect, useState, useContext } from "react";
import useFetch from "../../hooks/useFetch.JSX";
import styles from "../../styles/Product.module.css";
import { StoreContext } from "../../context/StoreContext.jsx";

function Product() {
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [productByBranch, setProductByBranch] = useState([]);
  const [count, setCount] = useState(1);
  const { getCategoryList, getProductByBranch, getDetailProduct } = useFetch();
  const [productData, setProductData] = useState(null);
  const [modalCount, setModalCount] = useState(1);
  const { state } = useContext(StoreContext);

  const handleCategoryList = async () => {
    try {
      const data = await getCategoryList();
      setCategoryList(data);
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

  const handleProductBySucursal = async () => {
    try {
      const data = await getProductByBranch(state.selectedBranchId);
      setProductByBranch(data);
      // Eliminar el arreglo de productos del localStorage al cambiar de sucursal
      localStorage.removeItem("cart");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  /*
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
      };

      cartItems.push(productToAdd);
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Cerrar el modal y reiniciar el contador
    setShowModalProduct(false);
    setModalCount(1);
  };*/

  const getCartItemCount = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cartItems.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
  };

  useEffect(() => {
    handleCategoryList();
    handleProductBySucursal();
  }, [state.selectedBranchId]);

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
              {categoryList.slice(0, 3).map((category) => (
                <img
                  key={category.id}
                  className={styles.category_item}
                  src={category.url}
                  alt={category.name}
                />
              ))}
            </div>
          </div>
          {categoryList.slice(0, 3).map((category) => (
            <div className={styles.category_list} key={category.id}>
              <div className={styles.category_item_detail}>
                <div className={styles.category_item_info}>
                  <p className={styles.category_item_tittle}>Categorías</p>
                  <p className={styles.category_item_description}>
                    {category.name}
                  </p>
                </div>
                {}
                <div className={styles.category_product_list}>
                  {productByBranch
                    .filter((product) => product.category_id === category.id)
                    .map((product) => (
                      <div
                        className={styles.category_item_select}
                        onClick={() => {
                          setShowModalProduct(true);
                          handleDetailProduct(product.id);
                        }}
                        key={product.id}
                      >
                        <div className={styles.category_item_product}>
                          <img
                            className={styles.product_img}
                            key={product.id}
                            src={product.url}
                            alt={product.name}
                          />
                          <div className={styles.item_product_info}>
                            <p className={styles.product_name}>
                              {product.name}
                            </p>
                            <p className={styles.product_ml}>
                              {product.description}
                            </p>
                            <div className={styles.item_product_option}>
                              <div className={styles.product_cost}>
                                <p className={styles.price_text}>Precio</p>
                                <p className={styles.product_price}>
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
                                    className="fill-000000"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {}
              </div>
            </div>
          ))}
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

export default Product;
