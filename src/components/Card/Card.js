import classes from "./Card.module.css";

const Card = ({
    gender,
    name: { first, last },
    registered: { date },
    location: { city, country },
    picture: { large },
    age,
}) => {
    const registationDate = new Date(date);
    return (
        <div className={classes.Card}>
            <img className={classes.img} src={large} alt="avatar" />
            <div>
                <h2 className={classes.header}>{[first, last].join(" ")}</h2>
                <p>
                    Возраст: <strong>{age}</strong>
                </p>
                <p>
                    Пол: <strong>{gender}</strong>
                </p>
                <p>
                    Адрес: <strong>{[country, city].join(" ")}</strong>
                </p>
                <p>
                    Дата регистрации: <strong>{registationDate.toLocaleDateString()}</strong>
                </p>
            </div>
        </div>
    );
};

export default Card;
