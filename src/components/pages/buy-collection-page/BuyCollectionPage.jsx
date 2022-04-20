import { BuyCollectionFilter } from "../../buy-collection/buy-collection-filter/BuyCollectionFilter"
import { BuyCollectionHeader } from "../../buy-collection/buy-collection-header/BuyCollectionHeader"
import artistCoolCats from '../../../images/buy-collection/header/artist-cool-cats.png';
import headerCoolCats from '../../../images/buy-collection/header/header-cool-cats.png';
import { BuyCollectionListContainer } from "../../buy-collection/buy-collection-list/BuyCollectionListContainer";
import styles from './buy-collection-page.module.scss';
import { WrapperLayout } from "../../layout/Wrapper-layout";
import { useState } from "react";
import * as cats from '../../../images/buy-collection/list';
import { roundNumber } from "../../../tools/roundNumber";

const createCardData = () => {
    return {
        title: 'Cool Cats',
        number: roundNumber(Math.random() * 10000, 0),
        value: roundNumber(Math.random() * 10, 3),
        oldValue: roundNumber(Math.random() * 10, 3),
        favs: roundNumber(Math.random() * 1000, 0),
    }
}

export const BuyCollectionPage = () => {
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

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectedOption = (option) => {
        const findOption = selectedOptions.find(selectedOption => selectedOption === option);
        if (findOption) {
            const filteredSelectedOptions = selectedOptions.filter(selectedOption => selectedOption !== option)
            setSelectedOptions(filteredSelectedOptions)
        } else {
            setSelectedOptions(oldSelectedOptions => [...oldSelectedOptions, option])
        }        
    }

     return(<>
            <BuyCollectionHeader artistImg={artistCoolCats} artistName="CoolCatsContract" headerImg={headerCoolCats} title="Cool Cats NFT"/>
                <WrapperLayout>
                    <div className={styles['collection-container']}>
                        <BuyCollectionFilter handleSelectedOption={handleSelectedOption} selectedOptions={selectedOptions}/>
                        <BuyCollectionListContainer collectionList={collectionList} handleSelectedOption={handleSelectedOption} selectedOptions={selectedOptions} />
                    </div>
                </WrapperLayout>
            </>
     )
}