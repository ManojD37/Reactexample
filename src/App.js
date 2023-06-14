
import './App.css';
import Greet from './components/greet.js'
import Hook from './components/Hooks.js'
const  App=()=> {

  return (
    <div className="App">
        <Hook/>
        <Greet name='jasmine'/>

    
    </div>
  );
}

export default App;
