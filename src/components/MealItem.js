import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
    const cartCont = useContext(CartContext);
    const formattedPrice = new Intl.NumberFormat('et-EE', {
        style: 'currency',
        currency: 'EUR',
    }).format(meal.price);
    function handleAddToCart(){
        cartCont.addItem(meal);
    }

  return (
    <li className="meal-item">
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;