import './App.css';
import Header from './pages/header/Header';
import Content from './pages/content/Content';
import Footer from './pages/footer/Footer';
import Curstomer from './components/customers/Curstomer';

function App() {
  return (
    <div>
      <div className='header'>  <Header/></div>
      <div className='main'> <Curstomer/></div>
      <div className='footer'><Footer/></div>

    
    
 
   
     
    </div>
  

   
   
  );
}

export default App;
