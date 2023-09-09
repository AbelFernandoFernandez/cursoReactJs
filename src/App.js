import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner saludo={'Bienvenidos'} />
    </div>
  );
}

export default App;
