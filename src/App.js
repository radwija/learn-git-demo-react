import logo from './logo.svg';
import './App.css';
import { HelloWorldComp } from './components/HelloWorldComp';
import { MyNavbar } from './components/MyNavbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HelloWorldComp />
      <HelloWorldComp />
      <Footer />
    </div>
  );
}

export default App;
