import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import { PauseCircleFilled, PlayCircleFilled } from "@ant-design/icons";

const VideoSlider = () => {
  //const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const holderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<ReactPlayer[]>([]);

  /* const handleScroll = () => {
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
  }; */

  const videos = [
    "https://landingpagespolimentes.s3.us-east-2.amazonaws.com/elen_capri/the_master_key/video_intro.mp4",
  ];
  var videosSettings = {
    arrows: false,
    dots: true,
    lazy: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    afterChange: (index: number) => {
      //setCurrentIndex(index);
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

  /* useEffect(() => {
    return () => {
      setCurrentIndex(null);
    };
  }, []); */

  return (
    <div className="video-slider" ref={holderRef}>
      <Slider {...videosSettings}>
        {videos.map((video, index) => (
          <div key={`holder-${index}`}>
            <div key={index} className="video-holder">
              <ReactPlayer
                /* onPlay={() => {
                  if (index === currentIndex) {
                    setIsMuted(false);
                  } else {
                    setIsMuted(true);
                  }
                }} */
                onPlay={() => {
                  setIsMuted(false);
                }}
                ref={(el) => (videoRefs.current[index] = el!)}
                //playing={isPlaying === true && index === currentIndex}
                playing={isPlaying === true}
                url={video}
                width="100%"
                height="87%"
                muted={isMuted}
              />

              <footer className="video-slider__bottoms">
                {isPlaying && (
                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      setIsMuted(true);
                    }}
                  >
                    <PauseCircleFilled />
                  </button>
                )}

                {!isPlaying && (
                  <button
                    onClick={() => {
                      setIsPlaying(true);
                      setIsMuted(false);
                    }}
                  >
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
