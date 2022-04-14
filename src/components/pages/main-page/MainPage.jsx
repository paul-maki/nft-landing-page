import { CollectionListSection } from '../../collections/CollectionListSection';
import { Button } from '../../common/button/Button';
import { Header } from '../../common/header/Header';
import { HighlightSection } from '../../highlight-nft/HighlightSection';
import { WrapperLayout } from '../../layout/Wrapper-layout';
import { LiveSection } from '../../live/LiveSection';

export const MainPage = () => {
    return(
        <div>
            <Header>
                <Button>Iniciar sesión</Button>
            </Header>
            <WrapperLayout>
                <HighlightSection />
                <LiveSection/>
                <CollectionListSection />
            </WrapperLayout>
        </div>
    )
}