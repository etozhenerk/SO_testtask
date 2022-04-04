import { useState } from "react";
import useFetch from "./useFetch";
import { useEffect } from "react";

export const usePersons = () => {
    const res = useFetch();
    const [persons, setPersons] = useState(null);

    useEffect(() => {
        if (res.response) {
            setPersons(res.response);
        }
    }, [res, persons]);

    const genderFilter = (gender) => {
        const newList = [...persons];

        newList.forEach((item) => {
            item.visible = true;
            if (item.gender !== gender && gender !== "all") {
                item.visible = false;
            }
        });
        setPersons(newList);
    };

    const nameFilter = (value) => {
        value = value.toLowerCase();
        const newList = [...persons];
        newList.forEach((item) => {
            if (
                item.name.first.toLowerCase().indexOf(value) === -1 &&
                item.name.last.toLowerCase().indexOf(value) === -1
            ) {
                item.visible = false;
            } else {
                item.visible = true;
            }
        });
        setPersons(newList);
    };

    return { persons, setPersons, genderFilter, nameFilter };
};
