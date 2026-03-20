import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddCar from "../components/AddCar";

interface Icar {
  Name: string;
  Brand: string;
  Year: number;
}
export default function Home() {
  const [cars, setCars] = useState<Icar[]>([
    { Name: "Camry", Brand: "Toyota", Year: 2020 },
    { Name: "Civic", Brand: "Honda", Year: 2019 },
    { Name: "Model 3", Brand: "Tesla", Year: 2021 },
  ]);

  const [car, setnewcar] = useState<Icar>({ Name: "", Brand: "", Year: 0 });
  const [editscar, setEditCar] = useState<Icar>({
    Name: "",
    Brand: "",
    Year: 0,
  });
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editindex, setEditIndex] = useState(-1);

  const deleteItem = (carName: string) => {
    const newCars = cars.filter((car) => car.Name !== carName);
    setCars(newCars);
  };

  const addCar = () => {
    setCars([...cars, car]);
    setnewcar({ Name: "", Brand: "", Year: 0 });
    setShowAdd(false);
  };

  const editCars = (carIndex: number) => {
    setEditIndex(carIndex);
    var car = cars[carIndex];
    setEditCar(car);
    setShowEdit(true);
  };

  const editCar = () => {
    setCars((x) => {
      var newcars = [...x];
      newcars[editindex] = editscar;
      return newcars;
    });
    setEditCar({ Name: "", Brand: "", Year: 0 });
    setShowEdit(false);
  };
  return (
    <div className=" container w-100 p-4  bg-info">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Year </th>
            <th>
              <button
                className="btn btn-primary "
                onClick={() => setShowAdd(true)}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{car.Name}</td>
              <td>{car.Brand}</td>
              <td>{car.Year}</td>
              <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteItem(car.Name)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => editCars(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAdd && (
        <AddCar onClose={() => setShowAdd(false)}>
          <h2>Add Car</h2>

          <input
            className="form-control"
            value={car.Name}
            placeholder="carname"
            onChange={(e) => setnewcar({ ...car, Name: e.target.value })}
          />

          <input
            className="form-control"
            value={car.Brand}
            placeholder="brand"
            onChange={(e) => setnewcar({ ...car, Brand: e.target.value })}
          />

          <input
            className="form-control"
            placeholder="year"
            value={car.Year}
            onChange={(e) =>
              setnewcar({ ...car, Year: parseInt(e.target.value) })
            }
          />

          <button className="btn btn-success" onClick={addCar}>
            Save
          </button>
        </AddCar>
      )}

      {showEdit && (
        <AddCar onClose={() => setShowEdit(false)}>
          <h2>Edit Car</h2>

          <input
            className="form-control"
            value={editscar.Name}
            placeholder="carname"
            onChange={(e) => setEditCar({ ...editscar, Name: e.target.value })}
          />

          <input
            className="form-control"
            value={editscar.Brand}
            placeholder="brand"
            onChange={(e) => setEditCar({ ...editscar, Brand: e.target.value })}
          />

          <input
            className="form-control"
            placeholder="year"
            value={editscar.Year}
            onChange={(e) =>
              setEditCar({ ...editscar, Year: parseInt(e.target.value) })
            }
          />

          <button className="btn btn-success" onClick={editCar}>
            Save
          </button>
        </AddCar>
      )}
    </div>
  );
}
