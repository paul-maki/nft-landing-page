import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BuyCollectionPage } from './components/pages/buy-collection-page/BuyCollectionPage';
import { ExploreCollectionsPage } from './components/pages/explore-collections-page/ExploreCollectionsPage';
import { MainPage } from './components/pages/main-page/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/nft-landing-page'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/explore' element={<ExploreCollectionsPage />} />
          <Route path='/cool-cats-nft' element={<BuyCollectionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
