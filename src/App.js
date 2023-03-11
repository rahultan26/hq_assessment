import logo from './logo.svg';
import './App.css';
import Multiselect from 'multiselect-react-dropdown';
import Jobtitles from './components/jobtitles';
import CountrySelector from './components/countrySelector';
function App() {
  return (
    <div className="App">
      <Jobtitles/>
      <CountrySelector/>
    </div>
  );
}

export default App;
