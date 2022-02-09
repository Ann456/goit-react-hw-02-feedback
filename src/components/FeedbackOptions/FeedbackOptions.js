import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnBox}>
      {options.map(item => (
        <button
          className={s.button}
          type="button"
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;