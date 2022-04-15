import { CollectionCard } from "../collectionCard/CollectionCard";
import styles from './selected-collection.module.scss';

export const SelectedCollection = ({ collection }) => {
    return(
        <div className={styles.container}>
            {collection && collection.map(nft => {
                return (
                    <CollectionCard key={`${nft.artistname}-${nft.title}`} artistImg={nft.artistImg} artistName={nft.artistName} img={nft.img} text={nft.text} title={nft.title}/>
                )
            })}
        </div>
    )
}