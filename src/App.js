import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        

          <Navbar logoName='Text Convertor' value='Tech' values='More'/>
          <Textarea type='text'/>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
