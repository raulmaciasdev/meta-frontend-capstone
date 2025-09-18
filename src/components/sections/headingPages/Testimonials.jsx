import TestimonialCard from "./CardInfo/TestimonialCard";
import star from "../../../assets/star.png";

const testimonialsData = [
  {
    image: star,
    name: "Maria",
    review: "Amazing food and great service!"
  },
  {
    image: star,
    name: "John",
    review: "The best Mediterranean restaurant in Chicago."
  },
  {
    image: star,
    name: "Sofia",
    review: "Loved the lemon dessert!"
  },
  {
    image: star,
    name: "Alex",
    review: "Fresh ingredients and cozy atmosphere."
  }
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="testimonials-topbar">
      <h1>Testimonials</h1>
    </div>
    <div className="testimonials-cards">
      {testimonialsData.map((item, idx) => (
        <TestimonialCard key={idx} {...item} />
      ))}
    </div>
  </section>
);

export default Testimonials;
