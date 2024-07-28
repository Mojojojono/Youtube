import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";

const Home = ({ sidebar }) => {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
    </div>
  );
};

export default Home;
