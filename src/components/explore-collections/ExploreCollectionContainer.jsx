
import { useEffect, useState } from 'react';
import { SelectedCollection } from './selected-collection/SelectedCollection';
import { TabPane } from '../common/tabs/TabPane';
import styles from './explore-collections.module.scss';

export const ExploreCollectionContainer = ({collectionList}) => {
    const [tabList, setTabList] = useState(null)
    const [selectedCollection, setSelectedCollection] = useState(null);

    const handleActiveTab = (activeTab) => {
        setSelectedCollection(collectionList[activeTab]);
    }

    useEffect(() => {
        if (!tabList){
            setTabList(collectionList.map(collection => collection.title));
        }
        setSelectedCollection(collectionList[0]);
    }, [collectionList, tabList])

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Explorar colecciones</h1>
            {tabList && <TabPane handleActiveTab={handleActiveTab} tabs= {tabList} />}
            {selectedCollection && <SelectedCollection collection={selectedCollection.collection}  />}
        </div>
    )
}