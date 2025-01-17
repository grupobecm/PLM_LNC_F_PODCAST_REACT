import './Manifesto.css';

const Manifesto = () => {
    return (
      <>
        <section className="mainsection manifesto" id="manifesto">
          <h3 className="manifestoHeadline">
            "It's all about the balance and,
            <em> incredible moments in life." </em>
          </h3>
          <div className="manifesto-description">
            <p>
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