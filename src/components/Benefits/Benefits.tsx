import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Benefits.css";
import nutrition from "../../assets/img/benefits/Nutrition.png";
import excercise from "../../assets/img/benefits/Exercise.png";
import longevity from "../../assets/img/benefits/Longevity.png";
import selfSustainability from "../../assets/img/benefits/Self-sustainability.png";
import wellness from '../../assets/img/benefits/wellness.svg';
import sleepQuality from '../../assets/img/benefits/sleep_quality.jpg'
import sectionFooter from "../../assets/img/benefits/section-footer.svg";
import sectionFooterDesk from "../../assets/img/benefits/section-footer-desk.svg";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Benefits: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<any>(null);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
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

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        "will-change": "opacity, transform",
        opacity: 0.2,
        z: -800,
      },
      {
        ease: "back.out(1.2)",
        opacity: 1,
        z: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    
    gsap.fromTo(
      textRef.current,
      {
        "will-change": "opacity, transform",
        opacity: 0.2,
        z: -800,
      },
      {
        ease: "back.out(1.2)",
        opacity: 1,
        z: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        text: {
          value: 'To have the opportunity to spend more time with our loved ones,participate in sports for extended periods, and fully embrace life bytraveling, creating new memories, and staying physically fit.',
          newClass: "animated"
        },
      }
    );

  }, []);

  return (
    <>
      <section className="mainsection benefits" id="benefits">
        <em className="section-label"> BENEFITS </em>
        <h3 className="section-title" ref={titleRef}>
          Offering knowledge
          <span style={{ display: "block" }}>
            {" "}
            to assist in living longer.{" "}
          </span>
        </h3>

        <div className="section-description" ref={textRef}>
          To have the opportunity to spend more time with our loved ones,
          participate in sports for extended periods, and fully embrace life by
          traveling, creating new memories, and staying physically fit.
        </div>

        <div className="section-carousel">
          <Slider {...settings} ref={sliderRef}>
            <div>
              <article className="section-carousel__item">
                <em> Exercise </em>
                <figure>
                  <img src={excercise} alt="Exercise" />
                </figure>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Longevity </em>
                <figure>
                  <img src={selfSustainability} alt="" />
                </figure>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Nutrition </em>

                <figure>
                  <img src={nutrition} alt="" />
                </figure>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Sleep Quality </em>

                <figure>
                  <img src={sleepQuality} alt="Understanding Science" />
                </figure>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Psychological and Emotional Well-being </em>

                <figure>
                  <img src={wellness} alt="Understanding Science" />
                </figure>
              </article>
            </div>
            <div>
              <article className="section-carousel__item">
                <em> Brain health </em>

                <figure>
                  <img src={longevity} alt="Understanding Science" />
                </figure>
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
};

export default Benefits;
