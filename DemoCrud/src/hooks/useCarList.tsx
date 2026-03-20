import React, { useState } from 'react'

export default function useCarList() {
  
    const [cars, setCars] = useState<string[]>([]);
  

    function addCar(car:string) {
        setCars(x=> [...x, car]);
    }

    function deleteCar(car:string) {
        setCars(x=> x.filter(c => c !== car));
    }

    function editCar(oldCar:string, newCar:string) {
        setCars(x=> x.map(c => c === oldCar ? newCar : c));
    }
  
    return {
        cars,
        addCar,
        deleteCar,
        editCar
    }
}
