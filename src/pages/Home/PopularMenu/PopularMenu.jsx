import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  const [isPending, error, menu] = useMenu();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
    </section>
  );
};

export default PopularMenu;
