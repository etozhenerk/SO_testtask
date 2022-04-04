import classes from "./InputItem.module.css";

const InputItem = ({ inputHandler }) => (
    <div className={classes.InputItem}>
        <input onInput={inputHandler} placeholder="Начните вводить ..." />
    </div>
);

export default InputItem;
