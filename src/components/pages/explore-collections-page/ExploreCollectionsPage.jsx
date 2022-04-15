import { WrapperLayout } from '../../layout/Wrapper-layout';
import styles from './explore-collections-page.module.scss';
import { ExploreCollectionContainer } from '../../explore-collections/ExploreCollectionContainer';
import { useEffect, useState } from 'react';
import { trendCollection } from '../../../fake-api/trends';

export const ExploreCollectionsPage = () => {    
    const [collectionList, setCollectionList] = useState(null);

    useEffect(() => {
        const collectionData = [
            {   
                title: 'Tendencias', 
                collection :  trendCollection
            }, 
            { 
                title: 'Cima',
                collection :  trendCollection
            }, 
            { 
                title: 'Arte',
                collection :  trendCollection
            }, 
            { 
                title: 'Música' ,
                collection :  trendCollection
            }, 
            { 
                title: 'Mundos virtuales',
                collection :  trendCollection
            }, 
            { 
                title: 'Cartas coleccionables',
                collection :  trendCollection
            }
        ];

        setCollectionList(collectionData);
    }, [])
    return (
        <div>
            <header className = {styles.header} />
            <WrapperLayout>
                {collectionList && <ExploreCollectionContainer collectionList={collectionList} />}                
            </WrapperLayout>
        </div>
    )
}