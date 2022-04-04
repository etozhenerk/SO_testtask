import classes from "./Radio.module.css";

const Radio = ({ title, changeHandler, id }) => (
    <label className={classes.container}>
        {title}
        <input id={id} onChange={changeHandler} type="radio" name="radio" />
        <span className={classes.checkmark}></span>
    </label>
);

export default Radio;
