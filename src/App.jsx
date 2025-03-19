import { useState } from "react";
import "./App.css";
import Cars from "./components/Cars";

function App() {
  const originalCars = [
    {
      name: "Honda",
      year: 2020,
    },
    {
      name: "Honda",
      year: 2000,
    },
    {
      name: "Honda",
      year: 1999,
    },
    {
      name: "Hyundai",
      year: 2021,
    },
    {
      name: "Suzuki",
      year: 2022,
    },
    {
      name: "Benz",
      year: 2023,
    },
    {
      name: "Audi",
      year: 2020,
    },
  ];
  const [cars, setCars] = useState(originalCars);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const searchCar = () => {
    let newcar = cars.filter((c) => c.name == search);
    setCars(newcar);
  };
  const addCar = () => {
    const newcar = {
      name: name,
      year: year,
    };
    setCars((originalCars) => [...originalCars, newcar]);
    setName(" ");
    setYear(" ");
  };
  const showCars = () => setCars(originalCars);
  return (
    <>
      <div>
        <input
          type="text"
          name="carsearch"
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <button onClick={searchCar}>Search</button>
        <button onClick={showCars}>Show All Cars</button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <button onClick={addCar}>Add New Car</button>
      </div>
      {cars.map((c) => (
        <Cars name={c.name} year={c.year} />
      ))}
    </>
  );
}

export default App;
