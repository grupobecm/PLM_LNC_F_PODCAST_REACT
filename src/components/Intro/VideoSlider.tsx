import ReactPlayer from "react-player";
import Slider from "react-slick";
import VideoIntro from "../../assets/video/video_intro.mp4";


const VideoSlider = () => {
    var videosSettings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      };

    return ( 
        <div className="video-slider">
        <Slider {...videosSettings}>
          <div>
            <div className="video-holder">
              <ReactPlayer
                playing={false}
                url={VideoIntro}
                width="100%"
                height="85%"
              />
            </div>
          </div>

          <div>
            <div className="video-holder">
              <ReactPlayer
                playing={false}
                url={VideoIntro}
                width="100%"
                height="85%"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
}
 
export default VideoSlider;