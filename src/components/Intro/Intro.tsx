import { useRef } from "react";
import "./intro.css";
import VideoSlider from "./VideoSlider";
import TestimonialsSlider from "./TestimonialsSlider";
import FeaturedSlider from "./FeaturedSlider";

const Intro = () => {
  
  const holderIntoRef = useRef<HTMLDivElement>(null);
 /*  const [isPlayingVideoIntro, setIsPlayingVideoIntro] =
    useState<boolean>(false); */

  /* const handleScroll = () => {
    const element = holderIntoRef.current;

    if (element) {
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      if (scrollTop > 0 && scrollTop <= elementTop + element.clientHeight) {
        setIsPlayingVideoIntro(true);
      } else {
        setIsPlayingVideoIntro(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  return (
    <section className="mainsection intro" id="intro" ref={holderIntoRef}>
      <h3>
        Introducing Longevity
        <span>
          The secret to preventing disease and living a longer and healthier
          life.
        </span>
      </h3>
      <p className="intro-txt">
        Isn’t just about adding years to our lives; it´s about adding life to
        our years.
      </p>

      <div className="mobile-testimonials">
        <VideoSlider />
        <TestimonialsSlider />
      </div>

      <div className="testimonials-grid">
        <aside className="first">
          <div className="testimonial-holder">
            <p>
              Preventing disease and focusing on living well every day has
              brought so much clarity and peace to my life.
            </p>
            <footer className="author-footer">— Amara Patel</footer>
          </div>

          <div className="testimonial-holder">
            <p>
              "Longevity is about quality, not just quantity. Staying active and
              healthy is my greatest gift to myself."
            </p>
            <footer className="author-footer">— Liam Carter</footer>
          </div>
        </aside>

        <aside className="video-aside">
          <VideoSlider />
        </aside>

        <aside className="last">
          <div className="testimonial-holder">
            <p>
              Longevity isn’t about just living longer—it’s about living a more
              fulfilling life. Investing in wellness has transformed how I view
              my future.
            </p>
            <footer className="author-footer">— Sophia Martins</footer>
          </div>

          <div className="testimonial-holder">
            <p>
              "Embracing innovation and prioritizing health is the ultimate way
              to ensure happiness and success in life."
            </p>
            <footer className="author-footer">— Ethan Rodriguez</footer>
          </div>
        </aside>
      </div>

      <footer className="intro-footer">
        <h4> Featured By </h4>
        <FeaturedSlider />
      </footer>
    </section>
  );
};

export default Intro;
