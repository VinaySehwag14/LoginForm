import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="tabOne">
        <Link className="link" to="/tabOne">
          TabOne
        </Link>
      </div>
      <div className="tabTwo">
        <Link className="link" to="/tabTwo">
          TabTwo
        </Link>
      </div>
    </div>
  );
};

export default Home;
