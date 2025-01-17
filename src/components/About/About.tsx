import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";
import AboutThird from "./AboutThird";
import './About.css';

const About = () => {
    return ( 
      <>
        <section className="mainsection" id="about">
          <AboutFirst />
          <AboutSecond />
          <AboutThird />
        </section>
      </>
    );
}
 
export default About;