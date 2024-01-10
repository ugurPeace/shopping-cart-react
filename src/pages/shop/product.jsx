import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="Urun Fotograflari" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>€ {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
