import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/add" className="btn btn-danger">
        Add Car
      </Link>
      <Link to="/dump" className="btn btn-warning">
        Practice
      </Link>
    </div>
  );
}
export default Home;