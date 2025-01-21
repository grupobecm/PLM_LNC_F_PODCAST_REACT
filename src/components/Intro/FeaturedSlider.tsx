import logoVogue from "../../assets/img/logo_vogue.svg";
import logoBazaar from "../../assets/img/logo_bazaar.png";
import logoBloomberg from "../../assets/img/logo_bloomberg.png";
import logoForbes from "../../assets/img/logo_forbes.png";
import Slider from "react-slick";

const FeaturedSlider = () => {
  var testimonialsSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "80px",
            }
        }, 
    ]
  };
  return (
    <div className="intro-footer__logos">
      <Slider {...testimonialsSettings}>
        <div>
          <figure>
            <img src={logoVogue} alt="Vogue" />
          </figure>
        </div>

        <div>
          <figure>
            <img src={logoBazaar} alt="Bazzar" />
          </figure>
        </div>

        <div>
          <figure>
            <img src={logoBloomberg} alt="Bazzar" />
          </figure>
        </div>

        <div>
          <figure>
            <img src={logoForbes} alt="Bazzar" />
          </figure>
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
