const TestimonialCard = ({ image, name, review }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{review}</p>
  </div>
);

export default TestimonialCard;
