import './App.css';
import { Button } from './components/common/button/Button';
import { Header } from './components/common/header/Header';
import { Explore } from './components/explore/Explore';
import { HighlightNFT } from './components/highlight-nft/HighlightNFT';
import { HighlightSection } from './components/highlight-nft/HighlightSection';
import { WrapperLayout } from './components/layout/Wrapper-layout';
import { LiveSection } from './components/live/LiveSection';
import artistPic from './images/highlight/tiny-dancer-artist.png';
import tinyDancer from './images/highlight/tiny-dancer.png';

function App() {
  return (
    <div className="App">
      <Header>
        <Button>Iniciar sesión</Button>
      </Header>
      <WrapperLayout>
        <HighlightSection>
          <Explore title="Descubra, recopile y venda NFT extraordinarios" subtitle="en el primer y más grande mercado de NFT del mundo" buttonText="Explorar"/>
          <HighlightNFT artistName="Aidan Tooth" artistPic={artistPic} img={tinyDancer} title="Tiny Dancer #2" />
        </HighlightSection>
        <LiveSection/>
      </WrapperLayout>
    </div>
  );
}

export default App;
