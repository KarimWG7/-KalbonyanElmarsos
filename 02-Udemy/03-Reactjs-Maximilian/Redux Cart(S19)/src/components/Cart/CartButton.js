import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cardButtonHandler = () => {
    dispatch(cartUIActions.toggleCart());
  };
  const totalQuanTity = useSelector((state) => state.cartSlice.totalQuanTity);
  return (
    <button className={classes.button} onClick={cardButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuanTity}</span>
    </button>
  );
};

export default CartButton;
