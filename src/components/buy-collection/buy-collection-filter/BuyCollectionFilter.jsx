import styles from './buy-collection-filter.module.scss';
import { FiFilter } from 'react-icons/fi';
import { BsGrid } from 'react-icons/bs';
import { BuyCollectionFilterSummary } from './BuyCollectionFilterSummary';
import { useState } from 'react';
import { BuyCollectionFilterOption } from './BuyCollectionFilterOption';

export const BuyCollectionFilter = ({selectedOptions, handleSelectedOption}) => {
    const filterList = [
        {
            title: 'Face',
            options: [
                {
                    option: 'Ditto',
                    quantity: 266
                },
                {
                    option: 'Mummy',
                    quantity: 261
                },
                {
                    option: 'Beard pirate',
                    quantity: 260
                },
                {
                    option: 'Zombie',
                    quantity: 258
                },
                {
                    option: 'Three eyes',
                    quantity: 255
                },
                {
                    option: 'Unamused',
                    quantity: 252
                },
                {
                    option: 'Angry cute',
                    quantity: 252
                },
                {
                    option: 'Stunned',
                    quantity: 250
                },
                {
                    option: 'Sunglasses heart',
                    quantity: 246
                },
            ]
        },
        {
            title: 'Hats',
            options: [
                {
                    option: 'Hat white',
                    quantity: 266
                },
                {
                    option: 'Bucket hat green',
                    quantity: 261
                },
                {
                    option: 'Mohawk green',
                    quantity: 260
                }                
            ]
        },
        {
            title: 'Shirt',
            options: [
                {
                    option: 'Overalls blue',
                    quantity: 266
                },
                {
                    option: 'Buttondown green',
                    quantity: 261
                },
                {
                    option: 'Robe blue',
                    quantity: 260
                }
            ]
        }
    ]

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
