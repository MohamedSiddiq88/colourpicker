import logo from './logo.svg';
import './App.css';
import Colors from './components/ColorCard';

function App() {
  let colorArr = [];
  colorArr.length=10;
  colorArr.fill(0);
  return (
    <div className="container">
      <div className='row'>
        {colorArr.map((ele,ind)=>(
          <div className='col-lg-3'>
      <Colors key={ind}></Colors>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
