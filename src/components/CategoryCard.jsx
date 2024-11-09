import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CategoryCard = () => {
  const [coffees, setCoffees] = useState([]);
  const { category } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCategory);
    }
  }, [category, data]);

  console.log(coffees);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
