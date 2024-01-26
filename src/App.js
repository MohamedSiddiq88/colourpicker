import logo from './logo.svg';
import './App.css';
import Colors from './components/ColorCard';
import Bar from './components/Bar';

function App() {
  let colorArr = [];
  colorArr.length=10;
  colorArr.fill(0);
  return (
    <>
    <Bar></Bar>
    <div className="container collection-div">
      <div className='row'>
        {colorArr.map((ele,ind)=>(
          <div className='col-lg-3'>
      <Colors key={ind}></Colors>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
