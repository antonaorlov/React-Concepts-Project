import classes from "./AvailableSupplements.module.css";
import Card from "../UI/Card";
import SupplementItem from "./SupplementItem";
const DUMMY_SUPPLEMENTS = [
  {
    id: "m1",
    name: "Protein Powder",
    description: "Pure Portein for muscle Growth/ Repair",
    price: 30
  },
  {
    id: "m2",
    name: "Creatine",
    description: "Creatine used for building muscle loosing fat",
    price: 35
  },
  {
    id: "m3",
    name: "Pre Workout",
    description: "Caffeine brings you the best energy for the Gym",
    price: 40
  }
];

const AvailableSupplements = (props) => {
  const SupplementList = DUMMY_SUPPLEMENTS.map((supplements) => (
    <SupplementItem
      id={supplements.id}
      key={supplements.id}
      name={supplements.name}
      description={supplements.description}
      price={supplements.price}
    />
  ));
  return (
    <section className={classes.supplements}>
      <Card>
        <ul>{SupplementList}</ul>
      </Card>
    </section>
  );
};

export default AvailableSupplements;
