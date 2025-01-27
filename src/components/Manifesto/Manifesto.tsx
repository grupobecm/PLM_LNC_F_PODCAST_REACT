import { useEffect, useRef } from 'react';
import './Manifesto.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);


const Manifesto = () => {
    const footerTitleRef = useRef<HTMLDivElement>(null);
    const footerTextRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
      gsap.fromTo(
        footerTitleRef.current,
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
            trigger: footerTitleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      
      gsap.fromTo(
        footerTextRef.current,
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
            trigger: footerTextRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          text: {
            value: 'Exploring the science, stories, and strategies behind living healthier and longer. Subscribe now.',
            newClass: "animated manifesto-description"
          },
        }
      );
    },[])
   
    return (
      <>
        <section className="mainsection manifesto">
          <h3 className="manifestoHeadline" ref={footerTitleRef}>
            "It's all about the balance and,
            <em> incredible moments in life." </em>
          </h3>
          <div className="manifesto-description" >
            <p ref={footerTextRef}>
              Exploring the science, stories, and strategies behind living
              healthier and longer. Subscribe now.
            </p>
          </div>

          <div className="manifesto-form">
            <div className="newsletter-group">
              <input type="text" />
              <label> Email address * </label>
              <div className="conditions">
                <input type="checkbox" />
                <div className="conditions-txt">
                  <p>
                    By checking the box I agree and consent to the terms and
                    conditions of the
                  </p>
                  <p>
                    <em> Policy </em> , including the
                    <em> Cookie Policy </em>
                  </p>
                </div>
              </div>
            </div>

            <button className="manifesto-btn">SUBSCRIBE NOW</button>
          </div>
          <footer className="manifesto-footer">
            <img src="assets/img/manifesto/manifesto-bottom.png" alt="" />
          </footer>

          <footer className="manifesto-footer__desk">
            <img src="assets/img/manifesto/manifesto-bottomDesk.png" alt="" />
          </footer>
        </section>
      </>
    );
}
 
export default Manifesto;