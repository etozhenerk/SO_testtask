import { useEffect, useState } from "react";

const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("persons")) {
            setResponse(JSON.parse(localStorage.getItem("persons")));
        } else {
            const fetchData = async () => {
                try {
                    const json = await fetch("https://randomuser.me/api/?results=30");
                    const res = await json.json();
                    const db = res.results.map(({ gender, name, registered, location, picture, dob: { age } }) => {
                        return {
                            gender,
                            name,
                            registered,
                            location,
                            picture,
                            age,
                            visible: true,
                        };
                    });
                    setResponse(db);
                    localStorage.setItem("persons", JSON.stringify(db));
                } catch (err) {
                    setError(err);
                }
            };
            fetchData();
        }
    }, []);

    return { response, error };
};

export default useFetch;
