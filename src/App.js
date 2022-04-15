import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ExploreCollectionsPage } from './components/pages/explore-collections-page/ExploreCollectionsPage';
import { MainPage } from './components/pages/main-page/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          {/* <Route path='/explore' element={<ExploreCollectionsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
