import styles from './buy-collection-filter.module.scss';
import { FiFilter } from 'react-icons/fi';
import { BsGrid } from 'react-icons/bs';
import { BuyCollectionFilterSummary } from './BuyCollectionFilterSummary';
import { useEffect, useState } from 'react';
import { BuyCollectionFilterOption } from './BuyCollectionFilterOption';

const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
}

export const BuyCollectionFilter = ({collectionList, selectedOptions, handleSelectedOption}) => {
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        const titles = [];
        const options = [];
        collectionList.forEach(nft => {
            options.push(nft.options);       
        })

        options.forEach(option => {
            const keys = Object.keys(option);
            keys.forEach(key => {
                if (!titles.find(title => title.title === capitalize(key))) {                     
                    const optionFilters = collectionList.map(nft => {
                        let quantity = 0;
                        collectionList.forEach((col) => {
                            if (col.options[key] === nft.options[key]) {
                                quantity++;
                            }
                        })
                        return {
                            option: nft.options[key],
                            quantity: quantity
                        }
                    });

                    const uniqueOptionFilters = [];
                    optionFilters.forEach(optionFilter => {
                        if (!uniqueOptionFilters.find(unique => unique.option === optionFilter.option)) {
                            uniqueOptionFilters.push(optionFilter);
                        }
                    })

                    titles.push({
                        title: capitalize(key),
                        options : uniqueOptionFilters                                                            
                    });
                }                
            })
        })

        setFilterList(titles)
       
        //console.log(titles);
        // setFilterList(options);
        
    }, [collectionList])

    const [filterOpen, setFilterOpen] = useState(true);
    
    const handleFilterOpen = () => {
        setFilterOpen((oldFilterOpen) => !oldFilterOpen)
    }   

    return( 
        <div className={styles.container}>
            <details className={styles.details} open>
                <BuyCollectionFilterSummary handleFilterOpen={handleFilterOpen} open={filterOpen} icon={<FiFilter size="1.25rem" />} totalFilters={selectedOptions && selectedOptions.length} title="Filters"/>
                {filterList.map(filter => {
                    return (
                        <details key={filter.title}>
                            <BuyCollectionFilterSummary icon={<BsGrid size="1.25rem"/>} title={filter.title} totalOptions={filter.options.length}/>
                            <div className={styles['options-container']}>
                                {filter.options.map(option => {
                                    const checked = selectedOptions.some(selectedOption => option.option === selectedOption);
                                    return (
                                        <BuyCollectionFilterOption checked={checked} key={option.option} handleSelectedOption={handleSelectedOption} option={option.option} quantity={option.quantity} />
                                    )
                                })}
                            </div>
                        </details>
                    )
                })}
            </details>
        </div>
    )
}
