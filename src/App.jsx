import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from './otherProjects/weatherApp/App';
import RickandmortyApp from './otherProjects/rickandmortyApp/App';
import PortfolioCV from './otherProjects/portfolioCV/App';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/JorgeSalas' element={<PortfolioCV/>}/>
          <Route path='/weatherapp' element={<WeatherApp/>} />
          <Route path='/rickandmortyapp' element={<RickandmortyApp/>} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
