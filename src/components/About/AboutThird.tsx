import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import BannerVideo from '../../assets/video/video_banner.mp4';
import './aboutThird.css'

const AboutThird = () => {
    const videoAboutRef = useRef<ReactPlayer>(null);
    const holderAboutRef = useRef<HTMLDivElement>(null);
    const [isPlayingVideoAbout, setIsPlayingVideoAbout] = useState<boolean>(false);

    const handleScroll = () => {
      const element = holderAboutRef.current;
      
      if (element) {
        const elementTop = element.offsetTop;
        //const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        if (scrollTop === elementTop ) {
          setIsPlayingVideoAbout(true);
        } else {
          setIsPlayingVideoAbout(false);
        }
      } 
    }; 

    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    
    return (
      <div className="aboutThird" ref={holderAboutRef}>
        <div className="about-grid">
          <section className="about-left headline"></section>
          <section className="about-right">
            <div className="about-right__txt">
              A Better Life Manifesto Live with purpose and let your values
              guide you. <b> The Key Master </b> Podcast is about Embrace growth
              by seeking challenges that inspire learning. Cultivate gratitude
              for life’s small and grand moments, and care for your well-being
              with rest, joy, and nourishment.
            </div>

            <div className="video_banner">
              {/* <video>
                <source src={BannerVideo} type="video/mp4" />
              </video> */}

              <ReactPlayer
                ref={videoAboutRef}
                playing={isPlayingVideoAbout}
                url={BannerVideo}
                width="100%"
                height="100%"
              />
            </div>

            <div className="about-right__txt">
              Foster deep, uplifting connections by listening and offering
              compassion. Act with integrity and let your authenticity shine in
              every action. Stay present and practice mindfulness to anchor
              yourself in the moment. Contribute to the greater good, knowing
              every kind act creates ripples of change. Choose joy deliberately,
              redefine success by fulfillment and authenticity, and take
              responsibility for shaping your path. Dream boldly and imagine a
              life beyond limits. This manifesto is a call to live
              intentionally, love deeply, and leave a meaningful legacy. A
              better life begins with the choices you make today.
            </div>
          </section>
        </div>
      </div>
    );
}
 
export default AboutThird;