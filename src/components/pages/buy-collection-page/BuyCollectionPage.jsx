import { BuyCollectionFilter } from "../../buy-collection/buy-collection-filter/BuyCollectionFilter"
import { BuyCollectionHeader } from "../../buy-collection/buy-collection-header/BuyCollectionHeader"
import artistCoolCats from '../../../images/buy-collection/header/artist-cool-cats.png';
import headerCoolCats from '../../../images/buy-collection/header/header-cool-cats.png';
import { BuyCollectionListContainer } from "../../buy-collection/buy-collection-list/BuyCollectionListContainer";
import styles from './buy-collection-page.module.scss';
import { WrapperLayout } from "../../layout/Wrapper-layout";
import { useState } from "react";

export const BuyCollectionPage = () => {
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
                        <BuyCollectionListContainer selectedOptions={selectedOptions} />
                    </div>
                </WrapperLayout>
            </>
     )
}