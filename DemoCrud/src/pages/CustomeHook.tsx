

import React, { useState } from 'react'
import useCarList from '../hooks/useCarList';

function CustomeHook() {
    const { cars, addCar, deleteCar, editCar } = useCarList();
      const [input, setInput] = useState("");

 return (
    <div>
      <h2>Simple List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => {
        addCar(input);
        setInput("");
      }}>
        Add
      </button>

      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car}

            <button onClick={() => deleteCar(car)}>
              Delete
            </button>

            <button onClick={() =>{ editCar(car, input + " ✔"); setInput("");}}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CustomeHook