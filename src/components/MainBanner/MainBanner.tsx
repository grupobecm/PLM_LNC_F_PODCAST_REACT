import { useEffect, useRef, useState } from 'react';
import './MainBanner.css';
import VideoMp4 from '../../assets/video/video_banner.mp4';
import ReactPlayer from 'react-player';


const MainBanner = () => {
    const videoRef = useRef<ReactPlayer>(null);
    const holderRef = useRef<HTMLElement>(null);
    const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(true);

    const handleScroll = () => {
      const element = holderRef.current;
      if (element) {
        const videoPosition = element?.offsetTop;
        const scrollPosition = window.scrollY;
        //const rect = element.getBoundingClientRect();
        if (scrollPosition === videoPosition) {
          setIsPlayingVideo(true);
        } else {
          setIsPlayingVideo(false);
          setIsMuted(true);
        }
      } 
    };

    const handleReady = () => {
      setIsPlayingVideo(true);
    }

    const handlePlay = () => {
      setIsMuted(true);
    }
  
    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        setIsPlayingVideo(false);
      } 
    },[]);

    
    
    return (  
        <section className="mainsection video" ref={holderRef}>  
        <div className="layer">
          <h4> INTRODUCING THE <span> PODCAST </span> </h4>
          <h1 className='layer-title'>
             <img src="assets/img/header/header-img.png" alt="" />
          </h1>
          <div className='subtitle'>
             Unlock the Secrets to a Longer, 
             <span> Better Life. </span>
          </div>
          <p>
             Exploring the science, stories, and strategies behind living healthier and longer
          </p>
          <button className='layer__button'>
            DISCOVER PODCAST
          </button>
        </div>
        <div className="mainsection__video">
          {/* <video ref={videoRef}>
            <source src={VideoMp4} type="video/mp4"  />
          </video> */}

          <ReactPlayer 
            ref={videoRef} 
            playing={isPlayingVideo}
            url={VideoMp4}
            width="100%" 
            height="100%" 
            onReady={handleReady}
            onStart={handlePlay}
            volume={1}
            muted={isMuted}
          />
        </div>
        <footer className='video__footer'></footer>
      </section>   
    );
}
 
export default MainBanner;