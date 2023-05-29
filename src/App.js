import './App.css';
import Header from './components/Header';
import { Features } from './components/Features';
import { Plans } from './components/Plans';
function App() {
  return (
    <div className='App'>
      <Header  />
      <section>
      <Features 
      style={{width:'50%',height:'80%',color:'white',justifyContent:'center',margin:'auto'}}
      />
      <Plans 
      style={{width:'30%',height:'80%',backgroundColor:'red',color:'white',justifyContent:'center',margin:'auto'}}
      />
      </section>
    </div>
  );
}

export default App;
