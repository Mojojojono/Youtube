import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>
        Learning to code because believe that oneday it will work for me IA
      </h3>
      <div className="video-info">
        <p>15389000 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>MojoJojo</p>
          <span>1B Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-desc">
        <p>Lets learn reactjs</p>
        <p>
          {" "}
          Learning to code because believe that oneday it will work for me IA
          Learning to code because believe that oneday it will work for me IA
          Learning to code because believe that oneday it will work for me IA
          Learning to code because believe that oneday it will work for me IA
        </p>
        <hr />
        <h4>130M comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Sameer <span>12 years ago</span>
            </h3>
            <p>
              Learning to code because believe that oneday it will work for me
              IA Learning to code because believe that oneday it will work for
              me IA Learning to code because believe that oneday it will work
              for me IA Learning to code because believe that oneday it will
              work for me IA Learning to code because believe that oneday it
              will work for me IA Learning to code because believe that oneday
              it will work for me IA Learning to code because believe that
              oneday it will work for me IA Learning to code because believe
              that oneday it will work for me IA
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>14984</span>
              <img src={dislike} alt="" />
              <span>62368</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Sameer <span>12 years ago</span>
            </h3>
            <p>
              Learning to code because believe that oneday it will work for me
              IA Learning to code because believe that oneday it will work for
              me IA Learning to code because believe that oneday it will work
              for me IA Learning to code because believe that oneday it will
              work for me IA Learning to code because believe that oneday it
              will work for me IA Learning to code because believe that oneday
              it will work for me IA Learning to code because believe that
              oneday it will work for me IA Learning to code because believe
              that oneday it will work for me IA
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>14984</span>
              <img src={dislike} alt="" />
              <span>62368</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Sameer <span>12 years ago</span>
            </h3>
            <p>
              Learning to code because believe that oneday it will work for me
              IA Learning to code because believe that oneday it will work for
              me IA Learning to code because believe that oneday it will work
              for me IA Learning to code because believe that oneday it will
              work for me IA Learning to code because believe that oneday it
              will work for me IA Learning to code because believe that oneday
              it will work for me IA Learning to code because believe that
              oneday it will work for me IA Learning to code because believe
              that oneday it will work for me IA
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>14984</span>
              <img src={dislike} alt="" />
              <span>62368</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Sameer <span>12 years ago</span>
            </h3>
            <p>
              Learning to code because believe that oneday it will work for me
              IA Learning to code because believe that oneday it will work for
              me IA Learning to code because believe that oneday it will work
              for me IA Learning to code because believe that oneday it will
              work for me IA Learning to code because believe that oneday it
              will work for me IA Learning to code because believe that oneday
              it will work for me IA Learning to code because believe that
              oneday it will work for me IA Learning to code because believe
              that oneday it will work for me IA
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>14984</span>
              <img src={dislike} alt="" />
              <span>62368</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
