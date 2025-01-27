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
          The perception of aging has evolved significantly in recent years. It's not just about wrinkles, but improving our overall quality of life.
          </p>
          <footer className="author-footer">— Amara Patel</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
          Offering knowledge to assist in living longer and healthier, avoiding illnesses, and building a timeless community It doesn’t have to cost a fortune. You hold the key!
          </p>
          <footer className="author-footer">— Liam Carter</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
          It’s about keeping our minds sharp and our bodies active. By focusing on our health, we can prevent serious diseases like Alzheimer’s, heart problems, and diabetes.
          </p>
          <footer className="author-footer">— Sophia Martins</footer>
        </div>
      </div>

      <div>
        <div className="testimonial-holder">
          <p>
            Unlock your full potential and take control of your life with our master key! You have the power within you, all you need are the right tools to unleash it.
          </p>
          <footer className="author-footer">— Ethan Rodriguez</footer>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialsSlider;
