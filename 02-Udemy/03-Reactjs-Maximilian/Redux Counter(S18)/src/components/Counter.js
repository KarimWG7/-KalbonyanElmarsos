import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const increaseByNumHandler = () => {
    dispatch(counterActions.increaseByNum( 5 ));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseByNumHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   increaseHandler() {
//     this.props.increase()
//   }
//   decreaseHandler() {
//     this.props.decrease()
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increaseHandler.bind(this)}>Increase</button>
//           <button onClick={this.decreaseHandler.bind(this)}>Decrease</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     increase : () => dispatch({type: 'increase'}),
//     decrease : () => dispatch({type: 'decrease'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
