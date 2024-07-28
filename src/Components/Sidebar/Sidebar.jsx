import "./Sidebar.css";
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entetainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blog_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="short-links">
        <div className="side-links">
          <img src={home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className="side-links">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-links">
          <img src={automobile_icon} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-links">
          <img src={sports_icon} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-links">
          <img src={entetainment_icon} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-links">
          <img src={tech_icon} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-links">
          <img src={music_icon} alt="" />
          <p>Music</p>
        </div>
        <div className="side-links">
          <img src={blog_icon} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-links">
          <img src={news_icon} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subs-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="" />
          <p>ComicVerse</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
