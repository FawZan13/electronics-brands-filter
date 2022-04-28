import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import BrandData from './Data.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search a electronics brand ..." data={BrandData} />
    </div>
  );
}

export default App;
