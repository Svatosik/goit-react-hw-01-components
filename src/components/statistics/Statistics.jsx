import { StatisticsItem } from './StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats &&
            stats.map(({ id, label, percentage }) => (
              <StatisticsItem key={id} label={label} percentage={percentage} />
            ))}
        </ul>
      </section>
    );
}


