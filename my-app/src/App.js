import logo from './logo.svg';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
          <div style={{display:'block'}}>  <Card3></Card3></div>
     <div style={{display: 'block'}}> <Cards></Cards></div>
      {/* <Card2></Card2> */}

    </div>
  );
}

export default App;
