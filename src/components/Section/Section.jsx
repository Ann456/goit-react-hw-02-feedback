import s from './Section.module.css';

const Section = ({ children, title }) => {
    return (
        <section className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </section>
    );
};

export default Section;