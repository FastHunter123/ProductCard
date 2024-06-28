import './App.css';
import s from './App.css'
import ProductCard from './Components/productCard';


const App = () => {
  return (
    <div className={s.main}>
      <ProductCard />
    </div>
  );
}

export default App;
