import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dump() {
  const [count, setCount] = useState(0);
  const cars: string[] = ["BMW", "AUDI", "MERCEDES", "TOYOTA"];
  return (
    <div className="container ">
      <Link to="/" className="btn btn-secondary mt-3">
        Go Home
      </Link>
      <p className="fw-bold text-success">hello</p>
      <App2 prop1="hello world" />
      <p className="fs-4"> Count using State : {count}</p>
      <div className="btn-group " style={{ gap: "10px" }}>
        <button className="btn btn-primary" onClick={() => addBtnClick(count)}>
          ADD
        </button>
        <button className="btn btn-danger" onClick={() => minusBtnClick(count)}>
          MINUS
        </button>
        <button className="btn btn-warning" onClick={() => alertOne()}>
          ALERT
        </button>
      </div>
      <div className="mt-5">
        {cars.map((x, index) => {
          return (
            <button className="bg-danger mx-2" key={index}>
              {x}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <InputCheck />
      </div>

      <div>
        <ApiFetching />
      </div>
    </div>
  );

  function alertOne() {
    alert();
  }
  function addBtnClick(count: number) {
    return setCount(count + 1);
  }
  function minusBtnClick(count: number) {
    if (count === 0) {
      return alert("Count is already 0");
    }

    return setCount(count - 1);
  }
}

function App2({ prop1 }: { prop1: string }) {
  return (
    <div>
      <p className="fw-bold text-uppercase fs-4">{prop1}</p>
    </div>
  );
}

function InputCheck() {
  var [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        className="form-control"
        placeholder="Enter your name"
        type="text"
        name="name"
        id="name"
        value={inputValue}
        onChange={(x) => setInputValue(x.target.value)}
      />

      <p className="fw-bold mt-5"> Your name is: {inputValue}</p>
    </div>
  );
}

function ApiFetching() {
  const [data, setData] = useState<any>(null);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((x: any) => {
          return <p key={x.id}>{x.name}</p>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dump;
