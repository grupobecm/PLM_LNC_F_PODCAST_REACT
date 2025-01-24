import PhotoCarrusel from "../PhotoCarrusel/PhotoCarrusel";
import doctors1 from '../../assets/img/doctors1 (1).png';
import doctors2 from '../../assets/img/doctors1 (3).png';

const AboutSecond = () => {
  const images = [doctors1, doctors2];
  return (
    <div className="aboutSecond">
      <div className="about-grid">
        <section className="about-left info">
          <em className="section-label">ABOUT</em>
          <h3 className="section-title">
            Science in an easy
            <span> understandable way </span>
          </h3>
          <div className="section-resume">
            <p>
              Our goal is to help people and the scientific community
              communicate better. By sharing information and simplifying complex
              terms, we can promote better health through preventing diseases
              and embracing new advancements. Knowledge is crucial and I want to
              showcase these advances to inspire and encourage the use of
              accessible and easy-to-understand scientific technologies.
            </p>
            <p>
              Now with advancements, our life expectancy has nearly doubled to
              78-80 years. The issue is that not everyone ages well, and we want
              to change that. We want everyone to have a quality life until the
              age of 100. Thankfully, science and biology are progressing
              rapidly. Just like how computers went from being the size of a
              room to fitting in our pockets, we hope to see the same kind of
              progress with aging. We are already seeing amazing advancements in
              lab animals, where drugs have extended life expectancy up to 50
              years. This gives us hope that something similar can be achieved
              for humans.
            </p>
          </div>
        </section>
        <section className="about-right brown">
          <div className="carousel-holder">
            <figure>
              <PhotoCarrusel 
                images={images}
              />
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSecond;