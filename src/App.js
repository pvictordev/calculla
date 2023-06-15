//JSX
import './styles.less'; 
import Main from './main';

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-num">1234,1234 *</div>
        <div className="current-num">1234,1234</div>
        </div> 
        <button>AC</button>
        <button>DEL</button>
        <button>%</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button className="column-two">0</button>
        <button>,</button>
        <button>=</button>
      
    </div>
  );
}

export default App;
