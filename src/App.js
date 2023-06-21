import logo from './logo.svg';
import './App.css';
import { HelloWorldComp } from './components/HelloWorldComp';
import { MyNavbar } from './components/MyNavbar';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <HelloWorldComp />
    </div>
  );
}

export default App;
