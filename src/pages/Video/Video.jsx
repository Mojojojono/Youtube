import PlayVideo from "../../Components/Play Video/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import "./Video.css";

const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
