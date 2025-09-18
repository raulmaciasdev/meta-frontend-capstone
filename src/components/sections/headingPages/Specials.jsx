import SpecialCard from "./CardInfo/SpecialCard";
import food1 from "../../../assets/food/food1.png";
import lemonDessert from "../../../assets/food/lemon-dessert.webp";
import greekSalad from "../../../assets/food/greek-salad.webp";

const specialsData = [
  {
    image: greekSalad,
    title: "Greek Salad",
    price: "$12.99",
    description: "Crispy lettuce, peppers, olives, and feta cheese."
  },
  {
    image: lemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "Authentic homemade lemon dessert."
  },
  {
    image: food1,
    title: "Bruschetta",
    price: "$8.50",
    description: "Grilled bread with garlic, tomatoes, olive oil, and basil."
  }
];

const Specials = () => (
  <section className="specials">
    <div className="specials-topbar">
      <h1>This Week's Specials!</h1>
      <button className="special-button">Online Menu</button>
    </div>
    <div className="specials-cards">
      {specialsData.map((item, idx) => (
        <SpecialCard key={idx} {...item} />
      ))}
    </div>
  </section>
);

export default Specials;
