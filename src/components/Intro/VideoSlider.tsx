import { useState, useEffect, useRef} from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import VideoIntro from "../../assets/video/video_intro.mp4";


const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const holderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const element = holderRef.current;
    if (element) {
      const elementTop = element.offsetTop;
      const scrollTop = window.scrollY;
      if (scrollTop >= elementTop) {
        setIsPlayingVideo(true);
      } else {
        setIsPlayingVideo(false);
      }
    }
  };

  const videos = [VideoIntro, VideoIntro];
  var videosSettings = {
    arrows: false,
    dots: true,
    lazy: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    afterChange: (currentSlide:number) => {
      setCurrentIndex(currentSlide);
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsPlayingVideo(false);
    };
  }, []);
  
  return (
    <div className="video-slider" ref={holderRef}>
      <Slider {...videosSettings}>
        {videos.map((video, index)=>(
          <div>
          <div className="video-holder">
            <ReactPlayer
              playing={isPlayingVideo && (currentIndex === index)}
              url={video}
              width="100%"
              height="85%"
            />
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}
 
export default VideoSlider;