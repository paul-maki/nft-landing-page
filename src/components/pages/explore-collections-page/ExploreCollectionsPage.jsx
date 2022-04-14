import { useState } from 'react';
import { CollectionList } from '../../collections/CollectionList';
import { TabPane } from '../../common/tabs/TabPane';
import { WrapperLayout } from '../../layout/Wrapper-layout';
import styles from './explore-collections-page.module.scss';
import { SelectedCollection } from './SelectedCollection';

const collectionsList = [
                            { title: 'Tendencias' }, 
                            { title: 'Cima'}, 
                            { title: 'Arte'}, 
                            { title: 'Música'}, 
                            { title: 'Mundos virtuales'}, 
                            { title: 'Cartas coleccionables'}];

const tabList = collectionsList.map(collection => collection.title);

export const ExploreCollectionsPage = () => {
    const [selectedCollection, setSelectedCollection] = useState(tabList[0]);
    const handleActiveTab = (activeTab) => {
        setSelectedCollection(activeTab);
    }

    return (
        <div>
            <header className = {styles.header} />
            <WrapperLayout>
                <h1 className={styles.title}>Explorar colecciones</h1>
                <TabPane handleActiveTab={handleActiveTab} tabs= {tabList} />
                <SelectedCollection selectedCollection={selectedCollection}  />
            </WrapperLayout>
        </div>
    )
}