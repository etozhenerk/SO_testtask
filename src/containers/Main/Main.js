import classes from "./Main.module.css";
import Card from "../../components/Card/Card";

const Main = ({ persons }) => {
    return (
        <main className={classes.Main}>
            {persons.map(({ gender, name, registered, location, picture, age, visible }, i) => {
                if (visible) {
                    return (
                        <Card
                            key={i}
                            gender={gender}
                            name={name}
                            registered={registered}
                            location={location}
                            picture={picture}
                            age={age}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </main>
    );
};

export default Main;
