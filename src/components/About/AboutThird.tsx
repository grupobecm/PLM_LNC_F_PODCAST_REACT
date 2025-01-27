import "./aboutThird.css";
const AboutThird = () => {
  return (
    <div className="aboutThird" id="manifesto">
      <div className="about-grid">
        <section className="about-left headline">
          <h4>
             Health is for everyone, 
             <span> not just the wealthy. </span>
          </h4>
       
        </section>
        <section className="about-right">
          <h3>
            A Better Life Manifesto.
            <span style={{ display: "block" }}> Values </span>
          </h3>
          <div className="section-categories">
            <div>
              <h5 className="brown-txt">Timeless</h5>
              <p>
                Time is the most precious thing we have, as it is something we
                cannot buy, and once it is gone, it can never be regained.
              </p>
            </div>
            <div>
              <h5 className="brown-txt">Ageless</h5>
              <p>
                Age should not dictate our abilities or experiences. What truly
                matters is the knowledge and experiences we hold within.
              </p>
            </div>
            <div>
              <h5 className="brown-txt">Priceless</h5>
              <p>
                The most valuable possessions we should hold are our core
                values, as they shape and guide our hearts and souls.
              </p>
            </div>
            <div>
              <h5 className="brown-txt">Limitless</h5>
              <p>
                With an emphasis on education and mentorship, Elen equips women
                with the skills and resources they need to achieve their goals,
                unlocking potential and building brighter futures.
              </p>
            </div>

            <div>
              <h5 className="brown-txt">Science</h5>
              <p>
                Science is a constant pursuit of discovery, whether it be in
                understanding our world or improving our lives through
                innovation and healing.
              </p>
            </div>

            <div>
              <h5 className="brown-txt">Spreading love</h5>
              <p>
                Storytellers have the ability to impact and change the lives of
                many through their words of love and knowledge.
              </p>
            </div>

            <div>
              <h5 className="brown-txt">Spiritual</h5>
              <p>
                Faith is a driving force that we may not always see, but it
                gives us the courage to overcome fear and obstacles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutThird;
