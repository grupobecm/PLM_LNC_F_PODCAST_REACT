import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import {
  PauseCircleFilled,
  PlayCircleFilled
} from '@ant-design/icons';
import VideoIntro from "../../assets/video/video_intro.mp4";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const holderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<ReactPlayer[]>([]);

  const handleScroll = () => {
    const element = holderRef.current;
    if (element) {
      const elementTop = element.offsetTop;
      const scrollTop = window.scrollY;
      if (scrollTop > 0 && scrollTop >= elementTop) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(null);
        setIsPlaying(false);
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
    afterChange: (index: number) => {
      setCurrentIndex(index);
      videoRefs.current.forEach((player, i) => {
        if (i === index) {
          player.getDuration();
          setIsPlaying(true);
        } else {
          setIsMuted(true);
        }
      });
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setCurrentIndex(null);
    };
  }, []);

  return (
    <div className="video-slider" ref={holderRef}>
      <Slider {...videosSettings}>
        {videos.map((video, index) => (
          <div key={`holder-${index}`}>
            <div key={index} className="video-holder">
              <ReactPlayer
                onPlay={() => {
                  if (index === currentIndex) {
                    setIsMuted(false);
                  } else {
                    setIsMuted(true);
                  }
                }}
                ref={(el) => (videoRefs.current[index] = el!)}
                playing={isPlaying === true && index === currentIndex}
                url={video}
                width="100%"
                height="87%"
                muted={isMuted}
              />

              <footer className="video-slider__bottoms">
                {isPlaying && (
                  <button onClick={() => setIsPlaying(false)}>
                    <PauseCircleFilled />
                  </button>
                )}

                {!isPlaying && (
                  <button onClick={() => setIsPlaying(true)}>
                    {" "}
                    <PlayCircleFilled />
                  </button>
                )}
              </footer>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
