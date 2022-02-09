import s from './Statistics.module.css';

const Statistics = ({ statistics, total }) => {
    return (
        <>
            {total > 0 && (
                <ul className={s.statBox}>
                    {statistics.map(([key, value]) => (
                        <li>
                            {key}:{value}
                        </li>
                    ))}
                    <li className={s.stat}>Total:{total}</li>
                </ul>
            )}
        </>
    );
};

export default Statistics;