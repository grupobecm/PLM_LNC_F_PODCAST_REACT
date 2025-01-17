import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import ericVerdinVideo from "../../assets/video/episodes/eric_verdin.mov";
import "./Menu.css";


const Menu: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMenuVideoPlaying, setIsMenuVideoPlaying] = useState(false);

  const videoRef = useRef<ReactPlayer>(null);

  const navLinks = [
    { id: "intro", text: "Intro" },
    { id: "about", text: "About" },
    { id: "manifesto", text: "Manifesto" },
    { id: "benefits", text: "Benefits" },
    { id: "episodes", text: "Episodes" },
    // ... otros enlaces
  ];

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsMenuVideoPlaying(!isMenuVideoPlaying);
  };

  useEffect(() => {
    return () => {
      setIsMenuVideoPlaying(false);
    };
  }, []);

  const handleScroll = (id:string) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpenMenu(false);
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
                  THE MASTER
                  <span>
                    KEY
                    <em> PODCAST </em>
                  </span>
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
