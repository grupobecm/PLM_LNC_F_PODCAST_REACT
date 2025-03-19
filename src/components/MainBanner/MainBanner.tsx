import { useEffect, useRef, useState } from "react";
import { PlayCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import useVideoContext from "../../hooks/useVideoContext";
import "./MainBanner.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const MainBanner = () => {
  const videoRef = useRef<ReactPlayer>(null);
  const holderRef = useRef<HTMLElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const { isOpenMenu } = useVideoContext();
  const [isOpenModal, setIsOpenModal] = useState(false);

  
  useEffect(() => {
    gsap.fromTo(
      subTitleRef.current,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        scale: 0.2,
      },
      {
        ease: "back.out(1.2)",
        opacity: 1,
        scale: 1,
        stagger: 1.4,
        scrollTrigger: {
          trigger: subTitleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      logoRef.current,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        scale: 0.2,
      },
      {
        ease: "back.out(1.2)",
        opacity: 1,
        scale: 1,
        stagger: 1.4,
      }
    );
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
    setIsPlayingVideo(true);
    setIsMuted(false);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setIsPlayingVideo(false);
    setIsMuted(true);
  };

  return (
    <section className="mainsection video" ref={holderRef}>
      <div className="layer"></div>
      <div className="videoTitle">
        <h4>
          {" "}
          INTRODUCING THE <span> PODCAST </span>{" "}
        </h4>
        <h1 className="layer-title" ref={logoRef}>
          <img src="assets/img/header/header-img.png" alt="" />
        </h1>
        <div className="subtitle" ref={subTitleRef}>
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
        <button onClick={() => handleOpenModal()}>
          <PlayCircleFilled />
        </button>

        <Modal
          isOpen={isOpenModal}
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "800px",
              height: "auto",
              maxHeight: "960px",
              padding: "0",
            },
          }}
        >
          <ReactPlayer
            ref={videoRef}
            playing={isPlayingVideo === true && isOpenMenu === false}
            url={"https://youtu.be/M8zK6HWi2wA?feature=shared"}
            controls={false}
            width="100%"
            height="100%"
            volume={1}
            muted={isMuted}
          />
          <button onClick={handleCloseModal} className="btn-close">
            <CloseCircleOutlined />
          </button>
        </Modal>
      </div>
    </section>
  );
};

export default MainBanner;
