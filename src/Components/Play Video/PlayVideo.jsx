import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import Recommended from "../Recommended/Recommended";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const [channelData, setChannelData] = useState(null);

  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const VideoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(VideoDetailsUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDataUrl)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  });

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
          views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          // src={jack}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "User"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-desc">
        <p>{apiData ? apiData.snippet.description : "See this Video"}</p>

        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
          Comments
          {commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img src={user_profile} alt="" />
                <div>
                  <h3>
                    Sameer <span>12 years ago</span>
                  </h3>
                  <p>
                    Learning to code because believe that oneday it will work
                    for me IA Learning to code because believe that oneday it
                    will work for me IA Learning to code because believe that
                    oneday it will work for me IA Learning to code because
                    believe that oneday it will work for me IA Learning to code
                    because believe that oneday it will work for me IA Learning
                    to code because believe that oneday it will work for me IA
                    Learning to code because believe that oneday it will work
                    for me IA Learning to code because believe that oneday it
                    will work for me IA
                  </p>
                  <div className="comment-action">
                    <img src={like} alt="" />
                    <span>14984</span>
                    <img src={dislike} alt="" />
                    <span>62368</span>
                  </div>
                </div>
              </div>
            );
          })}
        </h4>
      </div>
    </div>
  );
};

export default PlayVideo;
