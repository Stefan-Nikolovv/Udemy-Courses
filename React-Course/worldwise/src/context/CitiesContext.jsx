import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsloading(true);

        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch {
        alert("There was an error in fetch");
      } finally {
        setIsloading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsloading(true);

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error in fetch");
    } finally {
      setIsloading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsloading(true);

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCities((cities) => [...cities, data]);
      // setCities(cities.concat(data));
    } catch {
      alert("There was an error in create");
    } finally {
      setIsloading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsloading(true);

      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      setCities((cities) => cities.filter((city) => city.id !== id));
      // setCities(cities.concat(data));
    } catch {
      alert("Some error deleteing City!");
    } finally {
      setIsloading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Using this Provider otside the components");
  }
  return context;
}

export { CitiesProvider, useCities };
