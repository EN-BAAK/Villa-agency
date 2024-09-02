import "../style/Video.css"
import backImg from "../assets/banner-01.jpg"
import VideoFrame from "../assets/video-frame.jpg"

const Video = () => {
  return (
    <div id="video">
      <div className="image-holder">
        <img src={backImg} alt="background" />

        <div className="header">
          <p className="title">| Video View</p>

          <h2>Get Closer View <br /> & Different <br /> Feeling</h2>
        </div>
      </div>

      <div className="container">
        <div className="frame-holder">
          <img src={VideoFrame} alt="frame" />
          <div className="icon">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>

        <ul>
          <li>
            <p className="number">34</p>
            <p className="text">Buildings <br /> Finished Now</p>
            <span />
          </li>

          <li>
            <p className="number">12</p>
            <p className="text">Years <br /> Experience</p>
            <span />
          </li>

          <li>
            <p className="number">24</p>
            <p className="text">Awwards <br /> won 2023</p>
            <span />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Video
