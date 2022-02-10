import s from './Statistics.module.css';

const Statistics = ({ statistics, total, positivePersentage }) => {
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
                    <li className={s.stat}>Persentage:{positivePersentage}</li>
                </ul>
            )}
        </>
    );
};

export default Statistics;