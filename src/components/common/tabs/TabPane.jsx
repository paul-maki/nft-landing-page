import styles from './tab-pane.module.scss';
import { Tab } from './Tab';
import { useState } from 'react';

export const TabPane = ({handleActiveTab, tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
        handleActiveTab(index)
    }

    return (
        <ul className={styles['tab-pane']}>
            {tabs.map((tab, index) => {
                        return (
                            <Tab active={index === activeTab} key={tab} handleClick={() => handleClick(index)} index={index}>{tab}</Tab>
                        )
                    })}
        </ul>
    )
}