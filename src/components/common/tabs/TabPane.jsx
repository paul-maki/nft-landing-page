import styles from './tab-pane.module.scss';
import { Tab } from './Tab';
import { useState, useEffect } from 'react';

export const TabPane = ({handleActiveTab, tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        handleActiveTab(tabs[activeTab])
    },[activeTab, handleActiveTab, tabs])

    return (
        <ul className={styles['tab-pane']}>
            {tabs.map((tab, index) => {
                        return (
                            <Tab active={index === activeTab} key={tab} handleClick={setActiveTab} index={index}>{tab}</Tab>
                        )
                    })}
        </ul>
    )
}