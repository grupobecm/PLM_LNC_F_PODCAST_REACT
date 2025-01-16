import './intro.css';
import VideoIntro from '../../assets/video/video_intro.mp4';
import starImg from '../../assets/img/stars.png';
import logoVogue from '../../assets/img/logo_vogue.svg';
import logoBazaar from '../../assets/img/logo_bazaar.png';
import logoBloomberg from '../../assets/img/logo_bloomberg.png';
import logoForbes from '../../assets/img/logo_forbes.png';

const Intro = () => {
  return (
    <section className="mainsection intro">  
      <em className='section-label'> INTRO </em>
      <h3> 
        Why Longevity Should 
        <span> BeEveryone's Goal. </span>
      </h3>
      <p className='intro-txt'> 
        Longevity isn’t about just living longer—it’s about living better. Prevent disease, embrace innovation, and enjoy life to the fullest.
      </p>
      <div className="testimonials-grid">
        <aside className='first'>
          <div className='testimonial-holder'>
            <div className='testimonial-holder__stars'>
              <img src={starImg} />
            </div>
            <p> 
              Preventing disease and focusing on living well every day has brought so much clarity and peace to my life.
            </p>
            <footer className='author-footer'>
              — Amara Patel
            </footer>
          </div>
          
          <div className='testimonial-holder'>
            <div className='testimonial-holder__stars'>
              <img src={starImg} />
            </div>
            <p> 
              "Longevity is about quality, not just quantity. Staying active and healthy is my greatest gift to myself."
            </p>
            <footer className='author-footer'>
              — Liam Carter
            </footer>
          </div> 
          
        </aside>
        
        
        <aside className='video-aside'>
          <div className='video-holder'>
          <video>
            <source src={VideoIntro} type="video/mp4"  />
          </video>
          </div>
        </aside>

        <aside className='last'>
          <div className='testimonial-holder'>
            <div className='testimonial-holder__stars'>
              <img src={starImg} />
            </div>
            <p> 
              Longevity isn’t about just living longer—it’s about living a more fulfilling life. Investing in wellness has transformed how I view my future.
            </p>
            <footer className='author-footer'>
              — Sophia Martins
            </footer>
          </div>
          
          <div className='testimonial-holder'>
            <div className='testimonial-holder__stars'>
              <img src={starImg} />
            </div>
            <p> 
              "Embracing innovation and prioritizing health is the ultimate way to ensure happiness and success in life."
            </p>
            <footer className='author-footer'>
              — Ethan Rodriguez
            </footer>
          </div> 
          
        </aside>


      </div>

      <footer className='intro-footer'>
        <h4> Featured By </h4>
        <div className="intro-footer__logos">
           <figure>
             <img src={logoVogue} alt="Vogue" />
           </figure>

           <figure>
             <img src={logoBazaar} alt="Bazzar" />
           </figure>

           <figure>
             <img src={logoBloomberg} alt="Bazzar" />
           </figure>

           <figure>
             <img src={logoForbes} alt="Bazzar" />
           </figure>
        </div>
      </footer>
      
    </section>
  );
};

export default Intro;
