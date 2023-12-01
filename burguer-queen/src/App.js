import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">

<div className='logo'>
        <img src="./logo Hello Kitty.svg" alt="logo" />
      </div>
  

      <MyForm user={{name: "Josias", email: "josias@gmail.com"}}/>

    </div>
  );
}

export default App;
