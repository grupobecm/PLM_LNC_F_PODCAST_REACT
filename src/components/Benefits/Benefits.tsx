
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Benefits.css';
import nutrition from '../../assets/img/benefits/Nutrition.png';
import excercise from '../../assets/img/benefits/Exercise.png';
import longevity from '../../assets/img/benefits/Longevity.png';
import selfSustainability from '../../assets/img/benefits/Self-sustainability.png';
import sectionFooter from '../../assets/img/benefits/section-footer.png';
import sectionFooterDesk from '../../assets/img/benefits/section-footer-desk.png'


const Benefits:React.FC = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "80px",
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
      <section className="mainsection benefits">
        <em className="section-label"> BENEFITS </em>
        <h3 className="section-title">
          Why It’s Worth Living a<span> longer life and better. </span>
        </h3>

        <div className="section-description">
          To have the opportunity to spend more time with our loved ones,
          participate in sports for extended periods, and fully embrace life by
          traveling, creating new memories, and staying physically fit.
        </div>

        <div className="section-carousel">
          <Slider {...settings}>
            <div>
              <article className="section-carousel__item">
                <em> Exercise </em>
                <figure>
                  <img src={excercise} alt="Exercise" />
                </figure>
                <h5> An inclusive model </h5>
                <div className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sodales sapien a dolor sodales, ut condimentum dui
                  mattis.
                </div>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Longevity </em>

                <figure>
                  <img src={longevity} alt="" />
                </figure>

                <h5> More time to do less </h5>

                <div className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sodales sapien a dolor sodales, ut condimentum dui
                  mattis.
                </div>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Nutrition </em>

                <figure>
                  <img src={nutrition} alt="" />
                </figure>

                <h5> Evolves with you over time </h5>

                <div className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sodales sapien a dolor sodales, ut condimentum dui
                  mattis.
                </div>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Understanding Science </em>

                <figure>
                  <img src={selfSustainability} alt="Understanding Science" />
                </figure>

                <h5> Geared towards self-sustainability </h5>

                <div className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Suspendisse sodales sapien a dolor sodales, ut
                  condimentum dui mattis.
                </div>
              </article>
            </div>
          </Slider>
        </div>
        <footer className="benefits-footer__mobile">
          <img src={sectionFooter} alt="section footer" />
        </footer>

        <footer className="benefits-footer__desk">
          <img src={sectionFooterDesk} alt="section footer" />
        </footer>
      </section>
    </>
  );
}
 
export default Benefits;