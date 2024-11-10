import { useLoaderData } from "react-router-dom";

const CoffeesDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>coffees details {data.id}</div>;
};

export default CoffeesDetails;
