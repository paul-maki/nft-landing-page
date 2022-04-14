import styles from './highlight.module.scss';
import { Explore } from '../explore/Explore';
import { HighlightNFT } from './HighlightNFT';
import artistPic from '../../images/highlight/tiny-dancer-artist.png';
import tinyDancer from '../../images/highlight/tiny-dancer.png';

export const HighlightSection = () => {
    return(
        <section className={styles['highlight-section']}>
            <Explore title="Descubra, recopile y venda NFT extraordinarios" subtitle="en el primer y más grande mercado de NFT del mundo" buttonText="Explorar"/>
            <HighlightNFT artistName="Aidan Tooth" artistPic={artistPic} img={tinyDancer} title="Tiny Dancer #2" />
        </section>
    )
}