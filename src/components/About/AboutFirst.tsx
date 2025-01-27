import PhotoCarrusel from "../PhotoCarrusel/PhotoCarrusel";
import testimonial8 from '../../assets/img/testimonial-8.png';
import testimonial7 from '../../assets/img/testimonial-7.jpeg';

const AboutFirst = () => {
   
  const images = [testimonial8, testimonial7];
   
   return (
     <div className="about-first">
        <div className="about-grid">
          <section className="about-left blue">
           <div className="carousel-holder">
              {/* <img src="assets/img/about/image1.png" alt="testimonial 1" /> */}
              <PhotoCarrusel 
                images={images}
              /> 
           </div>
          </section>
          <section className="about-right info">
           <h3>
             Unlock the Secrets to a Longer, <span> Better Life. </span>
           </h3>
           <div className="section-resume">
             <p>
                Unlock your potential with our platform! We believe that you hold the key to a better life, and we have the necessary tools to assist you in unlocking it. Our platform brings together scientific information in a user-friendly manner, connecting experts from various fields including scientists, doctors, technology experts, celebrities, athletes, and personalities. With our professional approach, you can learn how to optimize your life.
             </p>
           </div>
          </section>
        </div>
     </div>
   );
}
 
export default AboutFirst;