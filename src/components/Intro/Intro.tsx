import { useRef } from "react";
import "./intro.css";
import VideoSlider from "./VideoSlider";
import TestimonialsSlider from "./TestimonialsSlider";
import FeaturedSlider from "./FeaturedSlider";

const Intro = () => {
  const holderIntoRef = useRef<HTMLDivElement>(null);
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
               The perception of aging has evolved significantly in recent years. It's not just about wrinkles, but improving our overall quality of life.
            </p>
            <footer className="author-footer">— Amara Patel</footer>
          </div>

          <div className="testimonial-holder">
            <p>
              Offering knowledge to assist in living longer and healthier, avoiding illnesses, and building a timeless community It doesn’t have to cost a fortune. You hold the key!
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
              It’s about keeping our minds sharp and our bodies active. By focusing on our health, we can prevent serious diseases like Alzheimer’s, heart problems, and diabetes.
            </p>
            <footer className="author-footer">— Sophia Martins</footer>
          </div>

          <div className="testimonial-holder">
            <p>
              Unlock your full potential and take control of your life with our master key! You have the power within you, all you need are the right tools to unleash it.
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
