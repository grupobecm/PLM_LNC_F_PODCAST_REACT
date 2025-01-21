import Slider from "react-slick";

const TestimonialsSlider = () => {
    
  var testimonialsSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <Slider {...testimonialsSettings}>
      <div>
        <div className="testimonial-holder">
          <p>
            Preventing disease and focusing on living well every day has brought
            so much clarity and peace to my life.
          </p>
          <footer className="author-footer">— Amara Patel</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
            "Longevity is about quality, not just quantity. Staying active and
            healthy is my greatest gift to myself."
          </p>
          <footer className="author-footer">— Liam Carter</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
            Longevity isn’t about just living longer—it’s about living a more
            fulfilling life. Investing in wellness has transformed how I view my
            future.
          </p>
          <footer className="author-footer">— Sophia Martins</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
            "Embracing innovation and prioritizing health is the ultimate way to
            ensure happiness and success in life."
          </p>
          <footer className="author-footer">— Ethan Rodriguez</footer>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialsSlider;
