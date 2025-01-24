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
               Unlock your potential with our platform! We believe that you hold the master key to your life, and we have the right tools to help you unlock it. Our platform connects scientific information in an easy way to understand, bringing together experts from different fields, such as scientists, doctors, technology experts, celebrities, athletes, and personalities. With our professional approach, you can learn how to make the most of your life.
             </p>
           </div>
          </section>
        </div>
     </div>
   );
}
 
export default AboutFirst;