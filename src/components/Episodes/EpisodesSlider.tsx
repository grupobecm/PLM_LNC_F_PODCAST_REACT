import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './EpisodesSlider.css';



const EpisodesSlider: React.FC = () => {
    var settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      };
    return (
      <>
        <section className="episodes-slider">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/ericVerdin.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 1 </em>
                    <h5> Eric Verdin (Buck Institute) </h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/aubreyDeGrey.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 2 </em>
                    <h5> Aubrey de Grey (Age) </h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/jenniferGarrison.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 3 </em>
                    <h5>Jennifer Garrison (Neuroscience and Women’s Health)</h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/vittorioSebestiano.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 4 </em>
                    <h5> Vittorio Sebestiano (Stanford) </h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/vittorioSebestiano.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 4 </em>
                    <h5> Vittorio Sebestiano (Stanford) </h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div>
                <div className="episodes-slider__item">
                  <figure>
                    <img src="assets/img/episodes/vittorioSebestiano.png" />
                  </figure>
                  <div className="episodes-slider__itemInfo">
                    <em> Episode 4 </em>
                    <h5> Vittorio Sebestiano (Stanford) </h5>

                    <footer>
                      <button>LISTEN NOW</button>

                      <div className="time">
                        <span> 1:45min </span>
                        <img src="assets/img/episodes/bars.png" alt="bars" />
                      </div>
                    </footer>
                  </div>
                </div>

                
              </div>
            </Slider>
          </div>
        </section>
      </>
    );
}
 
export default EpisodesSlider;