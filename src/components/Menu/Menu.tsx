import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import ericVerdinVideo from "../../assets/video/episodes/eric_verdin.mov";
import "./Menu.css";
import useVideoContext from "../../hooks/useVideoContext";
import { Link, animateScroll as scroll } from 'react-scroll';

const Menu: React.FC = () => {
  
  const [isMenuVideoPlaying, setIsMenuVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);


  const videoHolderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<ReactPlayer>(null);
  const {isOpenMenu, handleToggleMenu} = useVideoContext();

  const navLinks = [
    { id: "intro", text: "Intro" },
    { id: "about", text: "About" },
    { id: "manifesto", text: "Manifesto" },
    { id: "benefits", text: "Benefits" },
    { id: "episodes", text: "Episodes" },
    // ... otros enlaces
  ];

  const handleClick = () => {
    setIsMuted(!isMuted);
  }

  useEffect(()=>{
    if(videoHolderRef.current){
      videoHolderRef.current?.addEventListener('click',handleClick );
    }
  },[]);

  useEffect(() => {
    return () => {
      if(isOpenMenu) {
        setIsMenuVideoPlaying(true);
      }
    };
  }, [isOpenMenu]);

  

  const handleScroll = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      handleToggleMenu();
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {!isOpenMenu && (
        <button className="menu-btn" onClick={handleToggleMenu}>
          <img src="assets/img/menu/menu_btn.png" alt="menu btn" />
        </button>
      )}

      {isOpenMenu && (
        <div className="main-menu">
          <div className="main-menu__wrapper">
            <button className="menu-btn" onClick={handleToggleMenu}>
              <img src="assets/img/menu/close_btn.png" alt="menu btn" />
            </button>

            <div className="main-menu__holder">
              <section className="main-menu__left">
                <div className="main-menu__title">
                  <img src="assets/img/footer/footer-logo.png" alt="" />
                </div>
                <ul>
                  {navLinks.map((link) => (
                     <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => handleScroll(link.id)}
                      >
                        {link.text}
                      </a>
                    </li> 
                  ))}
                </ul>
              </section>

              <section className="main-menu__right">
                <h5> LAST EPISODES </h5>
                <div className="main-menu__videoHolder">
                  <ReactPlayer
                    ref={videoRef}
                    playing={isMenuVideoPlaying}
                    url={ericVerdinVideo}
                    width="100%"
                    height="100%"
                    volume={1}
                    muted={isMuted}
                  />
                  <footer className="main-menu__videoFooter">
                    <div className="video-footer__about">
                      <span className="episodeNumber">Episode 2</span>

                      <span className="episodeAuthor">Amara Patel</span>
                    </div>
                    <h5>How to Navigate Life’s Chaos with Grace</h5>

                    <div className="main-menu__videoCtrl">
                      <button>LISTEN NOW</button>

                      <div className="info">
                        <em> 1:45min </em>
                      </div>
                    </div>
                  </footer>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
