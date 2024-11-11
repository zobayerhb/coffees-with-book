import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getFavorites, removeFavorites } from "../utils/localIndex";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const lsData = getFavorites();
    setCoffees(lsData);
  }, []);
  const handleRemove = (id ) => {
    removeFavorites(id)
    const lsData = getFavorites();
    setCoffees(lsData);
  }
  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
