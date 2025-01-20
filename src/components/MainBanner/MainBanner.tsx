import { useEffect, useRef, useState } from "react";
import "./MainBanner.css";
import VideoMp4 from "../../assets/video/video_banner.mp4";
import ReactPlayer from "react-player";
import useVideoContext from "../../hooks/useVideoContext";

const MainBanner = () => {
  const videoRef = useRef<ReactPlayer>(null);
  const holderRef = useRef<HTMLElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const { isOpenMenu } = useVideoContext();

  const handleScroll = () => {
    const element = holderRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top === 0) {
        setIsPlayingVideo(true);
        setIsMuted(false);
      } else {
        setIsPlayingVideo(false);
        setIsMuted(true);
      }
    }
  };

  const handleDocumentClick = () => {
    setIsMuted(!isMuted);
  };

  const handleReady = () => {
    setIsPlayingVideo(true);
  };

  useEffect(() => {
    if (holderRef.current && isOpenMenu === false) {
      holderRef.current?.addEventListener("click", handleDocumentClick);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
      setIsPlayingVideo(false);
    };
  }, []);

  return (
    <section className="mainsection video" ref={holderRef}>
      <div className="layer"></div>
      <div className="videoTitle">
        <h4>
          {" "}
          INTRODUCING THE <span> PODCAST </span>{" "}
        </h4>
        <h1 className="layer-title">
          <img src="assets/img/header/header-img.png" alt="" />
        </h1>
        <div className="subtitle">
          Unlock the Secrets to a Longer,
          <span> Better Life. </span>
        </div>
        <p>
          Exploring the science, stories, and strategies behind living healthier
          and longer
        </p>
        <button className="layer__button">DISCOVER PODCAST</button>
      </div>
      <div className="mainsection__video">
        <ReactPlayer
          ref={videoRef}
          playing={isPlayingVideo === true && isOpenMenu === false}
          url={VideoMp4}
          width="100%"
          height="100%"
          onReady={handleReady}
          volume={1}
          muted={isMuted}
        />
      </div>
      <footer className="video__footer"></footer>
    </section>
  );
};

export default MainBanner;
