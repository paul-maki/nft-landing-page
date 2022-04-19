import { BuyCollectionFilter } from "../../buy-collection/buy-collection-filter/BuyCollectionFilter"
import { BuyCollectionHeader } from "../../buy-collection/buy-collection-header/BuyCollectionHeader"
import artistCoolCats from '../../../images/buy-collection/header/artist-cool-cats.png';
import headerCoolCats from '../../../images/buy-collection/header/header-cool-cats.png';
import { BuyCollectionListContainer } from "../../buy-collection/buy-collection-list/BuyCollectionListContainer";
import styles from './buy-collection-page.module.scss';

export const BuyCollectionPage = () => {
     return(
         <div>
            <BuyCollectionHeader artistImg={artistCoolCats} artistName="CoolCatsContract" headerImg={headerCoolCats} title="Cool Cats NFT"/>
            <div className={styles['collection-container']}>
                <BuyCollectionFilter />
                <BuyCollectionListContainer />
            </div>
         </div>
     )
}