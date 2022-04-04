import classes from "./Filter.module.css";
const Filter = ({ type, title, children }) => {
    const cls = [classes.checkbox];

    if (type === "checkbox") {
        cls.push(classes["container--checkbox"]);
    }
    return (
        <div className={classes.Filter}>
            <h2 className={classes.title}>{title}</h2>
            <div className={cls.join(" ")}>{children}</div>
        </div>
    );
};

export default Filter;
