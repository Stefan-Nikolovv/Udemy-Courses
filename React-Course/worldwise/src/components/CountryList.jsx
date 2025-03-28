import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriyList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((x, y) => {
    if (!x.map((el) => el.country).includes(y.country))
      return [...x, { country: y.country, emoji: y.emoji }];
    else return x;
  }, []);

  if (!cities.length)
    return (
      <Message message="Add your first city by choosing a city on the map" />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountriyList;
