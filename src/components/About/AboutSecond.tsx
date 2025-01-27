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
              The concept of health should not be reserved solely for the wealthy. Our aim is to facilitate communication between people and the scientific community. By simplifying complex terminology and sharing information, we can promote better health and prevent diseases while embracing new advancements. It is essential to spread knowledge and highlight new treatments to inspire and foster the use of accessible and easily comprehensible scientific technologies.
            </p>
            <p>
              Now, thanks to advancements in modern medicine, the average life expectancy has increased to 78-80 years. However, the issue lies in the fact that not everyone ages gracefully. We want to change this and ensure that everyone can enjoy a high quality of life well into their 100s. Thankfully, there have been rapid developments in science and biology. Just like how computers have shrunk from the size of a room to fitting in our pockets, we anticipate similar progress in the field of aging. In fact, impressive results have been observed in lab animals, with drugs extending their life expectancy by up to 50 years. This gives us hope that similar breakthroughs can be achieved for humans.
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