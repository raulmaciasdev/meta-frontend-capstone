const SpecialCard = ({ image, title, price, description }) => (
  <div className="menu-card">
    <img src={image} alt={title} />
    <div className="menu-card-content">
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
      <button className="special-button">Order</button>
    </div>
  </div>
);

export default SpecialCard;
