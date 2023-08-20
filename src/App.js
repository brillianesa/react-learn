import logo from './logo.svg';
import tes from './tes.png';
import './App.css';
import Home from './component/page/home';
import Region from './component/page/region'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './feature/counter/counterSlice';

function App() {
  <Home></Home>
  // const value = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  // const handleIncrement = () => {
  //   dispatch(increment());
  // }
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // }
  // const handleIncrementByAmount = (amount) => {
  //   dispatch(incrementByAmount(amount));
  // }
  // return (
  //   <div>
  //     <p>Counter Value: {value}</p>
  //     <button onClick={handleIncrement}>Increment</button>
  //     <button onClick={handleDecrement}>Decrement</button>
  //     <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
  //   </div>
  // );
}

export default App;
