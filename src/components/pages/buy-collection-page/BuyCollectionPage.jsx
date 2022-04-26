import { BuyCollectionFilter } from "../../buy-collection/buy-collection-filter/BuyCollectionFilter"
import { BuyCollectionHeader } from "../../buy-collection/buy-collection-header/BuyCollectionHeader"
import artistCoolCats from '../../../images/buy-collection/header/artist-cool-cats.png';
import headerCoolCats from '../../../images/buy-collection/header/header-cool-cats.png';
import { BuyCollectionListContainer } from "../../buy-collection/buy-collection-list/BuyCollectionListContainer";
import styles from './buy-collection-page.module.scss';
import { WrapperLayout } from "../../layout/Wrapper-layout";
import { useEffect, useMemo, useState } from "react";
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
    const collectionList = useMemo(() => [
        {
            ...createCardData(),
            img: cats.cat1,
            options:
            {                 
                face :'Moustache',
                hat : 'Bucket hat green'
            }             
        },
        {
            ...createCardData(),
            img: cats.cat2,
            options:
            {                 
                face :'Stunned',
                hat : 'First aid'
            }   
        },
        {
            ...createCardData(),
            img: cats.cat3,
            options:
            {                 
                face :'Angry cute',
                hat : 'Muffin'
            }   
        },
        {
            ...createCardData(),
            img: cats.cat4,
            options:
            {                 
                face :'Warrior',
                hat : 'Helmet'
            }
        },
        {
            ...createCardData(),
            img: cats.cat5,
            options:
            {                 
                face :'Happy',
                hat : 'Piercing'
            }
        },
        {
            ...createCardData(),
            img: cats.cat6,
            options:
            {                 
                face :'Angry cute',
                hat : 'Flower'
            }
        },
        {
            ...createCardData(),
            img: cats.cat7,
            options:
            {                 
                face :'Bandana',
                hat : 'Punky'
            }
        },
        {
            ...createCardData(),
            img: cats.cat8,
            options:
            {                 
                face :'Cute',
                hat : 'First aid'
            }
        },
        {
            ...createCardData(),
            img: cats.cat9,
            options:
            {                 
                face :'Happy',
                hat : 'Cap'
            }
        },
        {
            ...createCardData(),
            img: cats.cat10,
            options:
            {                 
                face :'Sleepy',
                hat : 'Cap'
            }
        },
        {
            ...createCardData(),
            img: cats.cat11,
            options:
            {                 
                face :'Smile',
                hat : 'Cap'
            }
        },
    ], []);

    const [collectionListFiltered, setCollectionListFiltered] = useState(collectionList)

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

    useEffect(() => {
        if (selectedOptions.length > 0) {
            let filteredOptions = [...collectionList]
            selectedOptions.forEach(selectedOption => {
                filteredOptions = filteredOptions.filter(nft => Object.values(nft.options).find(opt => selectedOption === opt))
            })
            //setCollectionListFiltered(collectionList.filter(nft => Object.values(nft.options).find(opt => selectedOptions.every(selOpt => selOpt === opt))));
            setCollectionListFiltered(filteredOptions);
            //setCollectionListFiltered(filteredOptions)
        } else {
            setCollectionListFiltered(collectionList)
        }
    }, [selectedOptions, collectionList])

     return(
        <>
            <BuyCollectionHeader artistImg={artistCoolCats} artistName="CoolCatsContract" headerImg={headerCoolCats} title="Cool Cats NFT"/>
            <WrapperLayout>
                <div className={styles['collection-container']}>
                    <BuyCollectionFilter collectionList={collectionList} handleSelectedOption={handleSelectedOption} selectedOptions={selectedOptions}/>
                    <BuyCollectionListContainer collectionList={collectionListFiltered} handleSelectedOption={handleSelectedOption} selectedOptions={selectedOptions} />
                </div>
            </WrapperLayout>
        </>
     )
}