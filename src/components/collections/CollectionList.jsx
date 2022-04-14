import { CollectionListItem } from "./CollectionListItem";
import styles from './collection.module.scss';
import collection1 from '../../images/collection/collection1.png';
import collection2 from '../../images/collection/collection2.png';
import collection3 from '../../images/collection/collection3.png';
import collection4 from '../../images/collection/collection4.png';
import collection5 from '../../images/collection/collection5.png';
import collection6 from '../../images/collection/collection6.png';
import collection7 from '../../images/collection/collection7.png';
import collection8 from '../../images/collection/collection8.png';
import collection9 from '../../images/collection/collection9.png';
import collection10 from '../../images/collection/collection10.png';
import collection11 from '../../images/collection/collection11.png';
import collection12 from '../../images/collection/collection12.png';
import collection13 from '../../images/collection/collection13.png';
import collection14 from '../../images/collection/collection14.png';
import collection15 from '../../images/collection/collection15.png';

const collectionList = [
    {
        img: collection1,
        title: "The Sandbox",
        position: 1
    },
    {
        img: collection2,
        title: "Bored Ape Yacht Club",
        position: 2
    },
    {
        img: collection3,
        title: "CryptoPunks",
        position: 3
    },
    {
        img: collection4,
        title: "the little NFT",
        position: 4
    },
    {
        img: collection5,
        title: "Wolf Game",
        position: 5
    },
    {
        img: collection6,
        title: "Decentraland",
        position: 6
    },
    {
        img: collection7,
        title: "JRNY CLUB",
        position: 7
    },
    {
        img: collection8,
        title: "Mutant Ape Space",
        position: 8
    },
    {
        img: collection9,
        title: "Swampverse",
        position: 9
    },
    {
        img: collection10,
        title: "more_vert Bear",
        position: 10
    },
    {
        img: collection11,
        title: "more_vert",
        position: 11
    },
    {
        img: collection12,
        title: "Feudalz",
        position: 12
    },
    {
        img: collection13,
        title: "Vox Coll",
        position: 13
    },
    {
        img: collection14,
        title: "Chain Runners",
        position: 14
    },
    {
        img: collection15,
        title: "The Fox Game",
        position: 15
    }
]


export const CollectionList = () => {
    return (
        <div className={styles['collection-list']}>
            {collectionList.map(collection => {
                return(
                    <CollectionListItem position={collection.position} img={collection.img} title={collection.title} />
                )
            })}
        </div>
    )
}