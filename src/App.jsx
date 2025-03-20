import { useState } from "react";
import "./App.css";
import Cars from "./components/Cars";

function App() {
  const originalCars = [
    {
      index: 1,
      name: "Honda",
      year: 2020,
    },
    {
      index: 2,
      name: "Honda",
      year: 2000,
    },
    {
      index: 3,
      name: "Honda",
      year: 1999,
    },
    {
      index: 4,
      name: "Hyundai",
      year: 2021,
    },
    {
      index: 5,
      name: "Suzuki",
      year: 2022,
    },
    {
      index: 6,
      name: "Benz",
      year: 2023,
    },
    {
      index: 7,
      name: "Audi",
      year: 2020,
    },
  ];
  const [cars, setCars] = useState(originalCars);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const searchCar = () => {
    let newcar = cars.filter((c) => c.name == search);
    setCars(newcar);
  };
  const addCar = () => {
    const newcar = [
      ...cars,
      {
        index: cars.length + 1,
        name: name,
        year: year,
      },
    ];
    setCars(newcar);
    setName(" ");
    setYear(" ");
  };

  const deleteRandom = () => {
    const newcars = [...cars];
    newcars.pop();
    setCars(newcars);
  };
  const showCars = () => setCars(cars);
  const deleteCar = (index) => {
    const updatedCars = cars.filter((c) => c.index !== index);
    setCars(updatedCars);
  };

  const editCar = ({ index, name, year }) => {
    setEditName(name);
    setEditYear(year);
    setEditIndex(index);
    setEdit(true);
  };

  const updateCar = () => {
    cars[editIndex] = {
      name: editName,
      year: editYear,
    };
    const newcars = [...cars];
    setCars(newcars);
    setEditName("");
    setEditYear("");
    setEditIndex("");
    setEdit(false);
  };

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
        <button onClick={deleteRandom}>Delete Last Car</button>
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
      {edit ? (
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <input
            type="text"
            onChange={(e) => setEditName(e.target.value)}
            value={editName}
          />
          <input
            type="text"
            onChange={(e) => setEditYear(e.target.value)}
            value={editYear}
          />
          <button onClick={updateCar}>Edit Car</button>
        </div>
      ) : (
        ""
      )}
      {cars.map((c, index) => (
        <Cars
          name={c.name}
          year={c.year}
          key={index}
          index={index}
          onDelete={deleteCar}
          onEdit={editCar}
        />
      ))}
    </>
  );
}

export default App;
