import styles from './highlight.module.scss';
import { Explore } from '../explore/Explore';
import { HighlightNFT } from './HighlightNFT';
import artistPic from '../../images/highlight/tiny-dancer-artist.png';
import tinyDancer from '../../images/highlight/tiny-dancer.png';
import { WrapperLayout } from '../layout/Wrapper-layout';
import { BackgroundImage } from './BackgroundImage';


export const HighlightSection = () => {
    return(<>
            <BackgroundImage />
            <WrapperLayout>
                <section className={styles['highlight-section']}>
                    <Explore title="Descubra, recopile y venda NFT extraordinarios" subtitle="en el primer y más grande mercado de NFT del mundo" buttonText="Explorar" buttonSecondaryText="Crear"/>
                    <HighlightNFT artistName="Aidan Tooth" artistPic={artistPic} img={tinyDancer} title="Tiny Dancer #2" />
                </section>
            </WrapperLayout>
        </>
    )

}