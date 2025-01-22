import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import ericVerdinVideo from '../../assets/video/episodes/eric_verdin.mov';
import './Episodes.css';
import EpisodesPlatforms from './EpisodesPlatforms';
import EpisodesSlider from './EpisodesSlider';

gsap.registerPlugin(ScrollTrigger, TextPlugin);



const Episodes = () => {
    const titleRef2= useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      gsap.fromTo(
        titleRef2.current,
        {
          "will-change": "opacity, transform",
          opacity: 0.2,
          z: -800,
        },
        {
          ease: "back.out(1.2)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: titleRef2.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      
      gsap.fromTo(
        textRef2.current,
        {
          "will-change": "opacity, transform",
          opacity: 0.2,
          z: -800,
        },
        {
          ease: "back.out(1.2)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          text: {
            value: 'A podcast exploring ideas, stories, and conversations that redefine perspectives and inspire change.',
            newClass: "animated"
          },
        }
      );
    },[]);
    
    return (  
      <section className="mainsection episodes" id="episodes">
        <em className="section-label"> 
          EPISODES
        </em>

        <h3 className="section-title" ref={titleRef2}>
          Every-word 
          <span> that can change the world. </span>
        </h3>

        <div className="episodes-description" ref={textRef2}>
           A podcast exploring ideas, stories, and conversations that redefine perspectives and inspire change.
        </div>

        <div className="episodes-video">
            <div className="episodes-layer">
               <div className="episodes-info">
                 <em> Episode 1 </em> 
                 <h4>
                   Eric Verdin 
                   <span> (Buck Institute) </span>
                 </h4>
                 <button className='episode-btn'>
                    LISTEN NOW
                 </button>
               </div>
               <div className="episodes-headline">
                  THE MASTER 
                  <span> 
                    <img src="assets/img/episodes/key.png" /> 
                    KEY 
                  </span>
               </div>
            </div>
            <video>
                <source src={ericVerdinVideo}  />
            </video>
        </div>

        <EpisodesSlider />

        <EpisodesPlatforms />

      </section>
    );
}
 
export default Episodes;