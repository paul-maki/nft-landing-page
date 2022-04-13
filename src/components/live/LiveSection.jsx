import { LiveCard } from "./live-card/LiveCard";
import styles from './live-section.module.scss';
import live1 from '../../images/live/live1.png';
import live2 from '../../images/live/live2.png';
import live3 from '../../images/live/live3.png';

export const LiveSection = () => {
    return(
        <section className={styles['live-section']}>
          <LiveCard color="orange" img={live1} title="Seussian de enoista" />
          <LiveCard color="purple" img={live2} title="Los vaqueros espaciales" />
          <LiveCard color="red" img={live3} title="Lee Mullican" />
        </section>
    )
}