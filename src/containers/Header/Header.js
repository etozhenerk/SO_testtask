import classes from "./Header.module.css";
import InputItem from "../../components/ImputItem/InputItem";
import FilterGroup from "../../hoc/FilterGroup/FilterGroup";
import Filter from "../../components/Filter/Filter";
import Radio from "../../components/Radio/Radio";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useEffect } from "react";

const Header = ({ genderFilter, nameFilter }) => {
    const changeHandler = (e) => {
        genderFilter(e.target.id);
    };

    useEffect(() => {
        const all = document.getElementById("all");
        all.checked = true;
    }, []);

    const inputHandler = (e) => {
        nameFilter(e.target.value);
    };

    return (
        <header className={classes.Header}>
            <InputItem inputHandler={inputHandler} />
            <FilterGroup>
                <Filter type="radio" title="Фильтр по полу">
                    <Radio id="all" changeHandler={changeHandler} title="Все" />
                    <Radio id="female" changeHandler={changeHandler} title="Только женщины" />
                    <Radio id="male" changeHandler={changeHandler} title="Только мужчины" />
                </Filter>
                <Filter type="checkbox" title="Фильтр по возрастным группам ">
                    <Checkbox title="0-18" />
                    <Checkbox title="35-65" />
                    <Checkbox title="18-35" />
                    <Checkbox title="65+" />
                </Filter>
            </FilterGroup>
        </header>
    );
};

export default Header;
