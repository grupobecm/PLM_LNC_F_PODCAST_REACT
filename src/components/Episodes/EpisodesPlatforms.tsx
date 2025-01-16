import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './EpisodesPlatforms.css';

const EpisodesPlatforms = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,

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
    <div className="episodes-platforms">
      <h5> Available on Platforms </h5>
      <div className="episodes-platforms__slider">
        <Slider {...settings}>
          <div>
            <article>
              <img
                src="assets/img/episodes/apple_podcast.png"
                alt="apple podcasts"
              />
            </article>
          </div>
          <div>
            <article>
              <img src="assets/img/episodes/yt_logo.png" alt="apple podcasts" />
            </article>
          </div>
          <div>
            <article>
              <img
                src="assets/img/episodes/logo_spotify.png"
                alt="apple podcasts"
              />
            </article>
          </div>
          <div>
            <article>
              <img
                src="assets/img/episodes/google_podcast.png"
                alt="apple podcasts"
              />
            </article>
          </div>
        </Slider>
      </div>
    </div>
  );
}
 
export default EpisodesPlatforms;