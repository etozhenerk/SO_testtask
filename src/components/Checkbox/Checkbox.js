import classes from "./Checkbox.module.css";

const Checkbox = ({ title }) => (
    <label className={classes.container}>
        {title}
        <input type="checkbox" />
        <span className={classes.checkmark}></span>
    </label>
);

export default Checkbox;
