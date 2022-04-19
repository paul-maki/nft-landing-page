import { BuyCollectionList } from "./BuyCollectionList";
import * as cats from '../../../images/buy-collection/list';
import { roundNumber } from "../../../tools/roundNumber";
import styles from './buy-collection-list.module.scss';

export const BuyCollectionListContainer = () => {
    const collectionList = [
        {
            ...createCardData(),
            img: cats.cat1
        },
        {
            ...createCardData(),
            img: cats.cat2
        },
        {
            ...createCardData(),
            img: cats.cat3
        },
        {
            ...createCardData(),
            img: cats.cat4
        },
        {
            ...createCardData(),
            img: cats.cat5
        },
        {
            ...createCardData(),
            img: cats.cat6
        },
        {
            ...createCardData(),
            img: cats.cat7
        },
        {
            ...createCardData(),
            img: cats.cat8
        },
        {
            ...createCardData(),
            img: cats.cat9
        },
        {
            ...createCardData(),
            img: cats.cat10
        },
        {
            ...createCardData(),
            img: cats.cat11
        },
    ];

    return(
        <div className={styles.container}>
            <BuyCollectionList collectionList={collectionList} />
        </div>
    )
}

const createCardData = () => {
    return {
        title: 'Cool Cats',
        number: roundNumber(Math.random() * 10000, 0),
        value: roundNumber(Math.random() * 10, 3),
        oldValue: roundNumber(Math.random() * 10, 3),
        favs: roundNumber(Math.random() * 1000, 0),
    }
}