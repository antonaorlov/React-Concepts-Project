import { Fragment } from "react";
import AvailableSupplements from "./AvailableSupplements";
import SupplementsSummary from "./SupplementsSummary";
const Supplements = (props) => {
  return (
    <Fragment>
      <SupplementsSummary />
      <AvailableSupplements />
    </Fragment>
  );
};

export default Supplements;
