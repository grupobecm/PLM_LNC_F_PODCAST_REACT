import './Footer.css';

const Footer = () => {
    return (
      <footer className="mainfooter">
        <div className="mainfooter__wrapper">
          <aside className="mainfooter__logo">
            <figure className="mainfooter__figure">
              <img src="assets/img/footer/footer-logo.png" alt="" />
            </figure>
          </aside>

          <aside className="mainfooter-form">
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
          </aside>
        </div>
      </footer>
    );
}
 
export default Footer;