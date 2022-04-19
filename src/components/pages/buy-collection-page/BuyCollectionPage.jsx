import { BuyCollectionFilter } from "../../buy-collection/buy-collection-filter/BuyCollectionFilter"
import { BuyCollectionHeader } from "../../buy-collection/buy-collection-header/BuyCollectionHeader"
import artistCoolCats from '../../../images/buy-collection/header/artist-cool-cats.png';
import headerCoolCats from '../../../images/buy-collection/header/header-cool-cats.png';
import { BuyCollectionListContainer } from "../../buy-collection/buy-collection-list/BuyCollectionListContainer";
import styles from './buy-collection-page.module.scss';
import { WrapperLayout } from "../../layout/Wrapper-layout";

export const BuyCollectionPage = () => {
     return(<>
            <BuyCollectionHeader artistImg={artistCoolCats} artistName="CoolCatsContract" headerImg={headerCoolCats} title="Cool Cats NFT"/>
                <WrapperLayout>
                    <div className={styles['collection-container']}>
                        <BuyCollectionFilter />
                        <BuyCollectionListContainer />
                    </div>
                </WrapperLayout>
            </>
     )
}